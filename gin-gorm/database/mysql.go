package database

import (
	"fmt"
	"os"

	_ "github.com/go-sql-driver/mysql" //加载mysql
	"github.com/jinzhu/gorm"
)

var Eloquent *gorm.DB

func init() {
	var err error
	//gorm 是自带的就按照拼接的url来用
	Eloquent, err = gorm.Open("mysql", "root:0129@tcp(127.0.0.1:3306)/gin?charset=utf8&parseTime=True&loc=Local&timeout=10ms")

	if err != nil {
		fmt.Printf("mysql connect error %v\n", err)
		os.Exit(-1)
	}

	if Eloquent.Error != nil {
		fmt.Printf("database error %v\n", Eloquent.Error)
	}

	//也可以像beego/orm 那样自动同步/创建表 (可以是model 类的引用 )
	// Eloquent.AutoMigrate(&models.User{})
}
