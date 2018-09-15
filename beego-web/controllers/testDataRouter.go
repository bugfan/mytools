package controllers

import (
	"fmt"
	"io"
	"os"

	"github.com/astaxie/beego"
)

/*
	此案例测试从ｕｒｌ拿数据，从表单拿数据
*/
type TestDataRouter struct {
	beego.Controller
}

func (c *TestDataRouter) Get() {
	fmt.Println("TestDataRouter1:", c.Ctx.Request.Form["grade"]) //Form["grade"])     //从表单拿数据	也是map[string]string类型
	fmt.Println("TestDataRouter1:", c.Ctx.Request.Form["id"][0])
	fmt.Println("TestDataRouter2:", c.Ctx.Request.URL.Query()["id"])    //[0]) //从url里面拿参数 map[string]string类型
	fmt.Println("TestDataRouter2:", c.Ctx.Request.URL.Query()["grade"]) //使用Ｑｕｅｒｙ函数从表单却拿不到数据

}
func (c *TestDataRouter) Post() {
	//通过表单上传文件，
	c.Ctx.Request.ParseMultipartForm(32 << 20)
	f, h, er := c.Ctx.Request.FormFile("img")
	if er != nil {
		fmt.Println(er)
		return
	}
	//接受之前应该判断本地是否有此文件名，有就改名字
	fmt.Println(h.Filename)
	fn, err := os.OpenFile("/test/"+h.Filename, os.O_WRONLY|os.O_CREATE, 0777)
	if err != nil {
		fmt.Println("jj:", err)
	}
	io.Copy(fn, f)

	fn.Close()
	io.WriteString(c.Ctx.ResponseWriter, "yyyyyyy")
	c.Ctx.WriteString("收到")
}
