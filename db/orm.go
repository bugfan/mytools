package db

import (
	"fmt"
	"net/url"
	"time"

	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql"
)

type Orm struct {
	dbname string
}

func NewOrm(aliasName string) *Orm {
	return &Orm{
		dbname: aliasName,
	}
}

func (self *Orm) ConnectMySQL(username string, password string, dbname string, mysql_ip string, param ...int) {
	orm.RegisterDriver("mysql", orm.DRMySQL)
	orm.DefaultTimeLoc, _ = time.LoadLocation("Asia/Shanghai")
	if len(mysql_ip) > 0 {
		connect := fmt.Sprintf(username+":"+password+"@tcp("+mysql_ip+")/"+dbname+"?charset=utf8&loc=%s", url.QueryEscape("Asia/Shanghai"))
		orm.RegisterDataBase(self.dbname, "mysql", connect, param...) // 最后2个参数: 最大空闲连接, 最大数据库连接
	} else {
		connect := fmt.Sprintf(username+":"+password+"@/"+dbname+"?charset=utf8&loc=%s", url.QueryEscape("Asia/Shanghai"))
		orm.RegisterDataBase(self.dbname, "mysql", connect, param...) // 最后2个参数: 最大空闲连接, 最大数据库连接
	}
}

func (self *Orm) NewOrm() orm.Ormer {
	o := orm.NewOrm()
	o.Using(self.dbname)
	return o
}

func (self *Orm) BuildDB(drop bool, log bool) {
	orm.RunSyncdb(self.dbname, drop, log)
}
