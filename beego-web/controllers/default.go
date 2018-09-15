package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.Data["testa"] = "testa_value"
	c.Data["imga"] = "../static/img/a.jpg"
	c.Data["conf_url"] = beego.AppConfig.String("httpport")
	c.TplName = "html/index.html" //"index.tpl"
}
