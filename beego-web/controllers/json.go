package controllers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"

	"github.com/astaxie/beego"
)

/*
	此代码验证服务器使用各种主流传输方式返回到页面
*/
type GetJsonController struct {
	beego.Controller
}
type MyStruct struct {
	Id   int64 //`json:"id"` //加如json标示，带标小写也可以，制定了json格式
	Name string
	Sex  string
}

func (c *GetJsonController) Get() {
	//获取json
	//rt := Sprintf("un is %s", un)

	mystruct := MyStruct{
		Id:   110,
		Name: "zxy",
		Sex:  "男",
	}
	//c.Data["jsonp"] = &mystruct
	//c.Data["xml"] = &mystruct
	c.Data["json"] = &mystruct //json格式

	//c.Ctx.WriteString("j")

	//c.ServeJSONP()	//他妈的jsonp竟然可以返回一个页面
	//c.ServeXML()
	c.ServeJSON() //json处理
}

//定义个对应的结构体
type User struct {
	Phone int64  //`json:"phone"`
	Pwd   string `json:"pwd"` //加不加都行	//json大小写无所谓[发送方]
}

func (c *GetJsonController) Post() {
	/*
		使用post方式，发送如下值
			{
				"phone":13312121110,
				"pwd":123123
			}
	*/
	//解析json[其实就是拿到post来的字符串，然后把这个string转换为json]
	user := User{}
	body, _ := ioutil.ReadAll(c.Ctx.Request.Body)
	body_str := string(body)
	fmt.Println(body_str, "日")
	if err := json.Unmarshal(body, &user); err != nil {
		fmt.Println("json转换有问题") //如果转化失败，代表数据类型不一致，只解析出来对的
	}
	fmt.Println(user.Phone, user.Pwd)

	/*
			这是看到的内容
			{
		        "phone":13312121110,
		        "pwd":123123
			} 日
			13312121110

	*/

	//返回json
	a := &User{
		Phone: 123,
		Pwd:   "zxy",
	}
	//fmt.Fprint(c.Ctx.ResponseWriter, "uiui") //往response写字符，返回到页面
	rj, _ := json.Marshal(a) //interface解析成json字符
	fmt.Fprint(c.Ctx.ResponseWriter, string(rj))
}
