package main

import (
	"fmt"
	"io"
	ssdb "mytools/ssdbtest"
	"net/http"
	"strings"
)

func sayhelloName(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()       //解析参数，默认是不会解析的
	fmt.Println(r.Form) //这些信息是输出到服务器端的打印信息
	fmt.Println("path", r.URL.Path)
	fmt.Println("scheme", r.URL.Scheme)
	fmt.Println(r.Form["url_long"])
	for k, v := range r.Form {
		fmt.Println("key:", k)
		fmt.Println("val:", strings.Join(v, ""))
	}
	fmt.Fprintf(w, "这里是小明的测试页面哈~!") //这个写入到w的是输出到客户端的
	fmt.Fprintf(w, "\n")            //这个写入到w的是输出到客户端的
	fmt.Fprintf(w, "----麻城创捷信息技术有限公司-----")

}
func index(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	//fmt.PRintln(r.Form())
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.Write([]byte(`zxy`))

}
func ajax(w http.ResponseWriter, r *http.Request) {
	fmt.Println("en  ")
	io.WriteString(w, "zxy")
}
func main() {
	//***********原生web请求处理
	// http.HandleFunc("/", sayhelloName) //设置访问的路由
	// http.HandleFunc("/index", index)   //
	// http.HandleFunc("/ajax", ajax)

	// err := http.ListenAndServe("127.0.0.1:9090", nil) //设置监听的端口
	// if err != nil {
	// 	log.Fatal("ListenAndServe: ", err)
	// }
	//**************时间日期处理
	// const daynum = 7
	// qyear := make([]int, 0, daynum)
	// qmonth := make([]int, 0, daynum)
	// qday := make([]int, 0, daynum)
	// for i := 0; i < daynum; i++ {
	// 	qa, qb, qc := time.Now().AddDate(0, 0, -i).Date()
	// 	qyear = append(qyear, qa)
	// 	qmonth = append(qmonth, int(qb))
	// 	qday = append(qday, qc)
	// }
	// for _, v := range qday {
	// 	fmt.Println(v)
	// }

	// t1 := time.Now().Unix()

	// fmt.Println(t1)
	// d1 := time.Unix(t1, 0).Format("2006-01-02 15:04:05")
	// fmt.Println(d1)
	//************md5加密和东八区时间戳(助通短信代码已经导入myztsms.go)
	// fmt.Println(gethonor(1))
	// fmt.Println(gethonor(11))
	//fmt.Println(gettime())

	//fmt.Printf("%s\n", getpwd(getpwd("PUubvs")+"20171018174201")) // 输出加密结果
	//str, _ := SendOneZTSMS("17701353312", "（⊙ｏ⊙）？你关注的人上线了！！快到美约")
	// ss := "1,201710181856388648435"
	// if "1," == ss[0:2] {
	// 	fmt.Println("匹配")
	//
	//fmt.Println(ss[0:2])
	//fmt.Println(SendMoreZTSMS([]string{"17611585657"}, "%s你好，请上线", "张五"))
	//fmt.Println(SendOneZTSMS("17701353312", "asdf"))
	//fmt.Println(GetZTSMSRustCount())
	//fmt.Println(testsms("17611585657"))
	//**********七牛地址测试
	// tt := "http://oiogxl80p.bkt.clouddn.com/static/user/31080/image/201710300101029.jpg"
	// fmt.Println(tt)
	// ind := strings.Index(tt, "/s")
	// fmt.Println(tt[ind+1:])
	// ss := tt[ind+1:]
	// ind2 := strings.LastIndex(ss, ".")
	// sn := ss[:ind2] + ss[ind2-1:ind2] + ss[ind2:]
	// fmt.Println(sn)
	// fmt.Println(tt[:ind+1] + sn)

	//********ｒｅｄｉｓ测试
	//redistest.Test()

	//*********ｓｓｄｂ测试
	ssdb.Test()
}
