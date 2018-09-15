package routers

import (
	//竟然有上下文,系统自带

	"myweb/controllers"
	"net/http"

	"github.com/astaxie/beego"
)

func init() {
	beego.ErrorHandler("404", page_not_found)
	beego.Router("/", &controllers.MainController{})
	beego.Router("/login", &controllers.LoginController{})
	beego.Router("/getln", &controllers.GetLoginController{})
	beego.Router("/json1", &controllers.GetJsonController{})
	beego.Router("/vali", &controllers.ValiController{})
	beego.Router("/getfromget", &controllers.GetFromGetController{})
	beego.Router("/testDataRouter", &controllers.TestDataRouter{}) //测试数据从ｕｒｌ获取，从表单获取
	beego.Router("/testAjax", &controllers.TestAjax{})
	beego.Router("/golist", &controllers.GoList{})

	//后台化的那些
	beego.Router("/back/change_img", &controllers.BackController{})
	//restful
	// beego.Get("/restful", func(ctx *context.Context) {
	// 	//ctx.Output.Body([]byte("restful"))
	// })

	//my handler

	// s := rpc.NewServer()
	// s.RegisterCodec(json.NewCodec(), "application/json")
	// s.RegisterService(new(HelloService), "")
	// beego.Handler("/rpc", s)

	//使用ｒｉｄｉｓ
	//beego.Router("/redis1", &controllers.Redis1{})
}

func page_not_found(rw http.ResponseWriter, r *http.Request) {
	//原生模板方式处理错误
	// t, _ := template.New("404.html").ParseFiles(beego.BConfig.WebConfig.ViewsPath + "/404.html")
	// data := make(map[string]interface{})
	// data["content"] = "page not found"
	// t.Execute(rw, data)

	//错误验证案例（写字符流回去）
	a := []byte(`找不到了 404错误，已经处理`)
	rw.Write(a)
}
