package controllers

import (
	"fmt"
	"io"

	"github.com/astaxie/beego"
)

/*
	使用ａｊａｘ
*/
type TestAjax struct {
	beego.Controller
}

func (c *TestAjax) Get() {
	//ajax by url
	fmt.Println("testAjax: _get", c.Ctx.Request.URL.Query()["id"])
	//fmt.Fprintln(c.Ctx.ResponseWriter, "get_ret")
	c.Ctx.ResponseWriter.Header().Set("Content-Type", "text/html; charset=utf-8")
	io.WriteString(c.Ctx.ResponseWriter, "yyy")
	//c.Ctx.WriteString("hh")
}
func (c *TestAjax) Post() {
	//从ａｊａｘ里面拿数据,by form
	fmt.Println("testAjax_post:", c.Ctx.Request.Form["id"])
	c.Ctx.ResponseWriter.Header().Set("Content-Type", "text/html; charset=utf-8")
	io.WriteString(c.Ctx.ResponseWriter, "日")
}
