package myztsms
import(
	"crypto/md5"
	"time"
)
func testsms(p string) string {
	fmt.Println(p)
	s := strings.Split(p, ",")
	for _, m := range s {
		fmt.Println(m)
	}
	return ""
}
func SendOneZTSMS(phone string, msg string) (bool, error) {
	t := gettime()
	data := make(url.Values)
	data["username"] = []string{zt_username}
	data["tkey"] = []string{t}
	data["password"] = []string{getpwd(getpwd(zt_pasword) + t)}
	data["mobile"] = []string{phone} //给接收人手机号
	data["content"] = []string{msg + zt_signature}
	data["xh"] = []string{""} //小号暂时不写

	res, err := http.PostForm("http://api.zthysms.com/sendSms.do", data)
	if err != nil {
		fmt.Println(err.Error())
		return false, err //自定义出错码
	}
	defer res.Body.Close()
	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		fmt.Println("body err=", err)
		return false, err
	}
	fmt.Println(body)
	if "1," == string(body)[0:2] { //机智，别的情况
		return true, nil
	}
	return false, nil
}
func SendMoreZTSMS(phones []string, msg string, params ...interface{}) (bool, error) {
	ss := fmt.Sprintf(msg, params...)
	t := gettime()
	data := make(url.Values)
	data["username"] = []string{zt_username}
	data["tkey"] = []string{t}
	data["password"] = []string{getpwd(getpwd(zt_pasword) + t)}
	data["mobile"] = phones //给接收人手机号s
	data["content"] = []string{ss + zt_signature}
	data["xh"] = []string{""} //小号暂时不写

	res, err := http.PostForm("http://api.zthysms.com/sendSmsBatch.do", data)
	if err != nil {
		fmt.Println(err.Error())
		return false, err //自定义出错码
	}
	defer res.Body.Close()
	body, err := ioutil.ReadAll(res.Body)
	fmt.Println(body)
	if err != nil {
		fmt.Println("body err=", err)
		return false, err
	}
	if "1," == string(body)[0:2] { //机智，别的情况
		return true, nil
	}
	return false, nil
}

const (
	zt_username  = "kahaahy" //助通账号
	zt_pasword   = "PUubvs"  //助通密码
	zt_signature = "【欧酷时代】"  //助通签名
)

func GetZTSMSRustCount() int64 {
	t := gettime()
	data := make(url.Values)
	data["username"] = []string{zt_username}
	data["tkey"] = []string{t}
	data["password"] = []string{getpwd(getpwd(zt_pasword) + t)}

	res, err := http.PostForm("http://api.zthysms.com/balance.do", data)
	if err != nil {
		fmt.Println(err.Error())
		return -2 //自定义出错码
	}
	defer res.Body.Close()
	body, err := ioutil.ReadAll(res.Body)
	fmt.Println(res.Body)
	if err != nil {
		fmt.Println("body err=", err)
	}
	return to.Int64(string(body))
}
func getpwd(in string) string {
	h := md5.New()
	h.Write([]byte(in))
	cipherStr := h.Sum(nil)
	return hex.EncodeToString(cipherStr)
}

func gettime() string {
	return time.Now().Format("20060102150405")
}

func gethonor(ind int64) string {
	xlsx, err := excelize.OpenFile("./config/config.xlsx")
	if err != nil {
		fmt.Println(err)
		return ""
	}

	return xlsx.GetCellValue("honor", "C"+to.String(ind+1))
}
