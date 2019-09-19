## beego orm 封装

## 使用
1. 执行`go get -u github.com/bugfan/mytools/db`
2. session := db.NewOrm("database_name") 
3. session.ConnectMySQL(xxx一些链接数据库参数)
4. session.NewOrm().QueryTable() ... 等函数
