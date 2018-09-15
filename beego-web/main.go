package main

import (
	"fmt"
	_ "myweb/routers"
	"myweb/sync"
	"os"

	"github.com/astaxie/beego"
)

func init() {
	//设置静态目录
	beego.SetStaticPath("/mybag", "mybag")
	//从命令行里面接受参数
	rgs := os.Args
	for k, v := range rgs {
		//从第二个单数开始，如果有执行的命令，就去执行，设计的挺好
		if k == 1 {
			if v == "-syncdb" {
				sync.RegModel() //同步下表
				fmt.Println("同步OK")
			}
			fmt.Println("结果:", k, v)
		}
	}
}
func main() {
	fmt.Println(32 << 20)
	beego.Run()
}
