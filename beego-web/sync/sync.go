package sync

import (
	model "myweb/models"

	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql"
)

//使用beego/orm下的同步表方法
func RegModel() {
	orm.RegisterModel(new(model.Account))                                //1指定表
	orm.RegisterDataBase("default", "mysql", "root:@/test?charset=utf8") //2.连接数据库
	orm.RunSyncdb("default", false, true)                                //3。打印，输出语句，可以关闭
}
