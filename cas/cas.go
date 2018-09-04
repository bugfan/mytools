package cas

import (
	"io/ioutil"
	"net/http"
	"strings"
)

/*
判断当前访问是否已认证
*/
func IsAuthentication(w http.ResponseWriter, r *http.Request, casServerUrl string) bool {
	if !hasTicket(r) {
		redirectToCasServer(w, r, casServerUrl)
		return false
	}

	localUrl := getLocalUrl(r)
	if !validateTicket(localUrl, casServerUrl) {
		redirectToCasServer(w, r, casServerUrl)
		return false
	}
	return true
}

/*
重定向到CAS认证中心
*/
func redirectToCasServer(w http.ResponseWriter, r *http.Request, casServerUrl string) {
	casServerUrl = casServerUrl + "/login?service=" + getLocalUrl(r)
	http.Redirect(w, r, casServerUrl, http.StatusFound)
}

/*
验证访问路径中的ticket是否有效
*/
func validateTicket(localUrl, casServerUrl string) bool {
	casServerUrl = casServerUrl + "/serviceValidate?service=" + localUrl
	res, err := http.Get(casServerUrl)
	if err != nil {
		return false
	}
	defer res.Body.Close()

	data, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return false
	}

	dataStr := string(data)
	if !strings.Contains(dataStr, "cas:authenticationSuccess") {
		return false
	}
	return true
}

/*
从请求中获取访问路径
*/
func getLocalUrl(r *http.Request) string {
	scheme := "http://"
	if r.TLS != nil {
		scheme = "https://"
	}
	url := strings.Join([]string{scheme, r.Host, r.RequestURI}, "")
	slice := strings.Split(url, "?")
	if len(slice) > 1 {
		localUrl := slice[0]
		urlParamStr := ensureOneTicketParam(slice[1])
		url = localUrl + "?" + urlParamStr
	}
	return url
}

/*
处理并确保路径中只有一个ticket参数
*/
func ensureOneTicketParam(urlParams string) string {
	if len(urlParams) == 0 || !strings.Contains(urlParams, "ticket") {
		return urlParams
	}

	sep := "&"
	params := strings.Split(urlParams, sep)

	newParams := ""
	ticket := ""
	for _, value := range params {
		if strings.Contains(value, "ticket") {
			ticket = value
			continue
		}

		if len(newParams) == 0 {
			newParams = value
		} else {
			newParams = newParams + sep + value
		}

	}
	newParams = newParams + sep + ticket
	return newParams
}

/*
获取ticket
*/
func getTicket(r *http.Request) string {
	return r.FormValue("ticket")
}

/*
判断是否有ticket
*/
func hasTicket(r *http.Request) bool {
	t := getTicket(r)
	return len(t) != 0
}
