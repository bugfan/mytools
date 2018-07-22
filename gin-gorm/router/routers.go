package router

import (
	. "gin-gorm/apis"

	"github.com/gin-gonic/gin"
)

func InitRouter() *gin.Engine {
	router := gin.Default()

	router.GET("/users", Users)

	router.POST("/user", Store)

	router.PUT("/user/:id", Update)

	router.DELETE("/user/:id", Destroy)

	//测试gorm使用
	router.POST("/test", Test)

	//一对一
	router.POST("/one2one", One2one)

	return router
}
