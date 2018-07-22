package apis

import (
	"fmt"
	model "gin-gorm/models"
	"log"

	orm "gin-gorm/database"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

//列表数据
func Users(c *gin.Context) {
	var user model.User
	user.Username = c.Request.FormValue("username")
	user.Password = c.Request.FormValue("password")
	result, err := user.Users()

	if err != nil {
		c.JSON(http.StatusOK, gin.H{
			"code":    -1,
			"message": "抱歉未找到相关信息",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"code": 1,
		"data": result,
	})
}

//添加数据
func Store(c *gin.Context) {
	var user model.User
	user.Username = c.Request.FormValue("username")
	user.Password = c.Request.FormValue("password")
	id, err := user.Insert()

	if err != nil {
		c.JSON(http.StatusOK, gin.H{
			"code":    -1,
			"message": "添加失败",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"code":    1,
		"message": "添加成功",
		"data":    id,
	})
}

//修改数据
func Update(c *gin.Context) {
	var user model.User
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	user.Password = c.Request.FormValue("password")
	result, err := user.Update(id)
	if err != nil || result.ID == 0 {
		c.JSON(http.StatusOK, gin.H{
			"code":    -1,
			"message": "修改失败",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"code":    1,
		"message": "修改成功",
	})
}

//删除数据
func Destroy(c *gin.Context) {
	var user model.User
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	result, err := user.Destroy(id)
	if err != nil || result.ID == 0 {
		c.JSON(http.StatusOK, gin.H{
			"code":    -1,
			"message": "删除失败",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"code":    1,
		"message": "删除成功",
	})
}

//测试 gorm
func Test(c *gin.Context) {
	/*
		插入 create
		更新 save
		查询 find 所有 first（可以加主键） 第一个 last 最后1条

	*/

	// //插入
	// o := orm.Eloquent
	// o.Begin()
	// user := model.User{
	// 	Username: "admin",
	// 	Password: "admin",
	// }
	// err := o.Create(&user).Error
	// log.Println("err:", err)
	// o.Commit()
	// c.JSON(200, gin.H{
	// 	"status": 200,
	// 	"msg":    "测试",
	// })

	//条件查询并更改
	// o := orm.Eloquent
	// o.Begin()
	// user := model.User{}
	// // err := o.Table("").Where("id=?", 2).First(&user) //指定表名
	// err := o.Where("id=?", 2).First(&user)
	// user.Password = "mypass"
	// //全部更新
	// err = o.Save(&user)
	// //局部更新
	// user.Password = "mypass2"
	// user.Username = "myname2"
	// // o.Model(&user).Update("username","name-verlue")	//单个字段
	// o.Model(&user).Select("username").Update(map[string]interface{}{"username": user.Username, "password": user.Password}) //更改多个字段 (在选中的更改)
	// // o.Model(&user).Omit("username").Update(map[string]interface{}{"username": user.Username, "password": user.Password}) //更改多个字段 (忽略)
	// // db.Model(&user).Updates(User{Name: "hello", Age: 18}) //struct 字段
	// log.Println("err:", err)
	// log.Println("user:", user)
	// o.Commit()
	// c.JSON(200, gin.H{
	// 	"status": 200,
	// 	"msg":    "测试",
	// })

	//删除
	o := orm.Eloquent
	o.Begin()
	user := model.User{
		ID: 4,
	}
	err := o.Delete(&user).Error
	err = o.Delete(model.User{}, "id=?", 3).Error //也可以使用where 也可以直接在args指定
	log.Println("err:", err)
	o.Commit()
	c.JSON(200, gin.H{
		"status": 200,
		"msg":    "测试",
	})
}

func One2one(c *gin.Context) {
	p := model.Profile{}
	// body, err := ioutil.ReadAll(c.Request.Body)
	// fmt.Println("body is :", string(body), err)
	if err := c.BindJSON(&p); err != nil {
		fmt.Println("bind err:", err)
	} else {
		fmt.Println("obj is :", p)
	}
	p.User = model.User{
		Username: "ono2one",
		Password: "one2one",
	}
	if err := orm.Eloquent.Create(&p).Error; err != nil {
		fmt.Println("插入失败:", err)
	}
	ps := []model.Profile{}
	orm.Eloquent.Find(&ps)
	c.JSON(200, gin.H{
		"status": 200,
		"msg":    "一对一",
		"data":   ps,
	})
}
