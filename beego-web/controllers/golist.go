package controllers

import (
	"github.com/astaxie/beego"
)

type GoList struct {
	beego.Controller
}

func (c *GoList) Get() {
	//返回ａｊａｘ页面
	c.TplName = "html/ajax.html"
}
