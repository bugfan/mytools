package main

import (
	"fmt"
	"log"
	"net/http"
	"net/smtp"
	"os"
	"strings"
)

func Up(w http.ResponseWriter, r *http.Request) {
	topic := r.URL.Query().Get("topic")
	t := r.URL.Query().Get("time")
	// 邮箱地址
	UserEmail := "908958194@qq.com"
	// 端口号，:25也行
	Mail_Smtp_Port := ":587"
	//邮箱的授权码，去邮箱自己获取
	Mail_Password := "*xjdurachbfdc"
	// 此处填写SMTP服务器
	Mail_Smtp_Host := "smtp.qq.com"
	auth := smtp.PlainAuth("", UserEmail, Mail_Password, Mail_Smtp_Host)
	to := []string{"917719033@qq.com"}
	nickname := "发送人名称"
	user := UserEmail

	subject := "标题"
	content_type := "Content-Type: text/plain; charset=UTF-8"
	body := "邮件内容-五阳-提升" + `nsq断了：` + topic + ":" + t
	msg := []byte("To: " + strings.Join(to, ",") + "\r\nFrom: " + nickname +
		"<" + user + ">\r\nSubject: " + subject + "\r\n" + content_type + "\r\n\r\n" + body)
	err := smtp.SendMail(Mail_Smtp_Host+Mail_Smtp_Port, auth, user, to, msg)
	if err != nil {
		fmt.Printf("send mail error: %v", err)
	}
}
func main() {
	http.HandleFunc("/api/up", Up) // 留个上报入口tacqp
	log.Fatal(http.ListenAndServe(":"+os.Args[1], nil))
}
