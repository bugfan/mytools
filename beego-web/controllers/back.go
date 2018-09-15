package controllers

import (
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"net/url"
	"os"

	"github.com/astaxie/beego"
	"github.com/seefan/to"
)

type BackController struct {
	beego.Controller
}

const (
	apkurl          = "https://meiyue2.mm419.com:8082/static/android/advert.json"
	iosurl          = "https://meiyue2.mm419.com:8082/static/ios/advert.json"
	banner_img_path = "/test/" //"/home/app/static/banner/"
)

type apkret struct {
	Data   []*banner `json:"data"`
	Status string    `json:"status"`
}
type banner struct {
	Id     int    `json:"id"`
	Imgurl string `json:"imgurl"`
	Title  string `json:"title"`
	Url    string `json:"url"`
}

func (c *BackController) Get() {
	//定义要发送的数据
	data := make(url.Values)
	//data["username"] = []string{zt_username}

	//发送客户端的那个请求
	res, err := http.PostForm(apkurl, data)
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	defer res.Body.Close()
	body, err := ioutil.ReadAll(res.Body)

	if err != nil {
		fmt.Println("body err=", err)
		return
	}
	//ＤＩＮＧ定义一个结构
	da := apkret{}
	//解析ｊｓｏｎ
	if err := json.Unmarshal(body, &da); err != nil {
		fmt.Println(to.String(body))
		fmt.Println("json转换有问题") //如果转化失败，代表数据类型不一致，只解析出来对的
	}
	// for k, v := range da.Data {
	// 	fmt.Println(k, v.Id)
	// 	fmt.Println(k, v.Title)
	// 	fmt.Println(k, v.Imgurl)
	// 	fmt.Println(k, v.Url)
	// }
	//原生
	// dd := make(map[string]interface{})
	// dd["content"] = "database is now down"
	// t, _ := template.New("data_manger.html").ParseFiles("/data_manger.html")
	// t.Execute(c.Ctx.ResponseWriter, nil)
	c.Data["data"] = da.Data
	c.Data["jsoncfg"] = to.String(body)
	//**********开始写ｉｏｓ的
	res2, err := http.PostForm(iosurl, data)
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	defer res2.Body.Close()
	body2, err := ioutil.ReadAll(res2.Body)
	if err != nil {
		fmt.Println("body2 err=", err)
		return
	}
	c.Data["jsoncfg2"] = to.String(body2)
	c.TplName = "html/data_manger.html"

}

func (c *BackController) Post() {
	//获取session
	//通过表单上传文件，
	c.Ctx.Request.ParseMultipartForm(32 << 20)
	f, _, er := c.Ctx.Request.FormFile("bfile")
	if er != nil {
		fmt.Println("解析文件出错", er)
		return
	}
	bname := c.Ctx.Request.Form["bname"][0]

	//把原来的额名字拿到了	
	fmt.Println(bname)
	fn, err := os.OpenFile(banner_img_path+to.String(bname), os.O_WRONLY|os.O_CREATE, 0777)
	if err != nil {
		fmt.Println("存储出错:", err)
	}
	io.Copy(fn, f)

	fn.Close()
	io.WriteString(c.Ctx.ResponseWriter, "上传完成")
}
