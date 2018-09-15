package controllers

import (
	. "fmt"

	"github.com/astaxie/beego"
)

type GetLoginController struct {
	beego.Controller
}

func (c *GetLoginController) Post() {
	//获取session
	un := c.GetSession("un")
	rt := Sprintf("un is %s", un)
	c.Ctx.WriteString(rt)
}
