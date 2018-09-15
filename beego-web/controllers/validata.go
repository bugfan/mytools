package controllers

import (
	"github.com/astaxie/beego"
)

/*
	此代码为web端向服务器提交表单，服务器接受
*/

type ValiController struct {
	beego.Controller
}
type LoginStruct struct {
	Name   string
	Passwd string
}

func (c *ValiController) Get() {
	c.TplName = "html/form1.html"

}

func (c *ValiController) Post() {
	//如果需要验证表单信息是否合理，使用beego下面的validation（"github.com/astaxie/beego/validation"）	竟然可以直接在定义结构体时候做验证
	//validation学习网址是：https://beego.me/docs/mvc/controller/validation.md
	//本次不验证了，直接使用

	//下面这||两种方式都可以获取表单数据，
	//fmt.Println(c.GetString("ext"))
	//fmt.Println(c.Input().Get("ext"))
	
	//他妈的，每次请求，要么返回视图，要么返回字符串，反正必须返回结果，不然页面报错
	c.Ctx.WriteString("post end")
}
