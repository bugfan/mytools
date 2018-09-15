package controllers

import (
	. "fmt"

	"github.com/astaxie/beego"
)

type LoginController struct {
	beego.Controller
	ax string
}

func (c *LoginController) Get() {
	c.Data["welcome"] = "欢迎来到赵鑫洋的网站!"
	c.TplName = "html/login.tpl"
}

func (c *LoginController) Post() {
	//从表单拿数据
	up := c.Input().Get("password")
	Println(up)
	//获取
	un := c.GetString("username")
	Println(un)
	var mm []string
	mm = append(mm, un)
	if un == "zxy" && up == "123" {
		//设置session参数
		c.ax = un
		//导出
		c.TplName = "index.tpl"
	} else {
		c.Ctx.WriteString("密码错误")
	}
	//c.TplName = "index.tpl"
}

// Controller defines some basic http request handler operations, such as
// http context, template and view, session and xsrf.
/*
type Controller struct {
	// context data
	Ctx  *context.Context
	Data map[interface{}]interface{}

	// route controller info
	controllerName string
	actionName     string
	methodMapping  map[string]func() //method:routertree
	gotofunc       string
	AppController  interface{}

	// template data
	TplName        string
	Layout         string
	LayoutSections map[string]string // the key is the section name and the value is the template name
	TplPrefix      string
	TplExt         string
	EnableRender   bool

	// xsrf data
	_xsrfToken string
	XSRFExpire int
	EnableXSRF bool

	// session
	CruSession session.Store
}
*/
