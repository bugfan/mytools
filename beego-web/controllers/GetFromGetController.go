package controllers

import (
	"fmt"

	"github.com/astaxie/beego"
)

type GetFromGetController struct {
	beego.Controller
}

func (c *GetFromGetController) Get() {
	//一、获取GET参数
	//	query := *http.Request.URL.Query()
	//	get_act := query["act"][0]
	//	fmt.Println(get_act)
	//	get_act1 := query["act"][1]
	//	fmt.Println(get_act1)

	fmt.Println(c.Ctx.Request.Method, "get")
	//一、获取GET参数

	query := c.Ctx.Request.URL.Query()
	get_act := query["act"][0]
	fmt.Println(get_act)
}
func (c *GetFromGetController) Post() {
	fmt.Println(c.Ctx.Request.Method, "post")
	fmt.Println(c.Ctx.Request.Form["offset"]) //从url里面拿

}
