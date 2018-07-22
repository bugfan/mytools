package main

import (
	orm "gin-gorm/database"
	"gin-gorm/models"

	_ "gin-gorm/database" //初始化链接一下数据库

	"gin-gorm/router"
)

func main() {
	orm.Eloquent.AutoMigrate(&models.User{}, &models.Profile{})
	defer orm.Eloquent.Close()    //主程序退出后把数据库链接断开
	router := router.InitRouter() //注册路由
	router.Run(":8000")           //启动
}
