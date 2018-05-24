package common

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"strconv"

	_ "github.com/go-sql-driver/mysql"
)

func Login(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	fmt.Println(r.FormValue("name"))
	fmt.Println(r.FormValue("pwd"))
	io.WriteString(w, "Ok!")
}
func Default(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, `
			<html>
				<head></head>
				<body>
					<h2>张学友</h2>
					<form action="/login" method="post">
						<input name="name" value="abc"/><br/>
						<input name="pwd" value="abc"/><br/>
						<input type="submit" value="登录"/>
					</form>
				</body>
			</html>
		`)
}

func Reg(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, `
			<html>
				<head></head>
				<body>
					<h2>张柏芝</h2>
					<form action="/reguser" method="post">
						<input name="name" value="abc"/><br/>
						<input name="pwd" value="abc"/><br/>
						<input type="submit" value="注册"/>
					</form>
				</body>
			</html>
		`)
}

func RegUser(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	fmt.Println(r.FormValue("name"))
	fmt.Println(r.FormValue("pwd"))
	db := getDbDriver()
	name := r.FormValue("name")
	pwd := r.FormValue("pwd")
	rr, err := db.Exec("insert into phone (name,number) values (?,?)", name, pwd)
	if err != nil {
		log.Fatal("执行sql出错", err)
	}
	q, _ := rr.RowsAffected()
	if q < 1 {
		myRet(w, "注册异常", 201)
	}
	//操作前的测试
	// strs, err := rows.Columns()
	// fmt.Println("sql的字段名:", strs, len(strs))
	// for rows.Next() {
	// 	var ret string
	// 	if err := rows.Scan(&ret); err != nil { //使用rows.Scan（）取值
	// 		log.Fatal("遍历sql结果出粗", err)
	// 	}
	// 	fmt.Println(ret)
	// }
	io.WriteString(w, "REg Ok!")
}

func getDbDriver() *sql.DB {
	db, err := sql.Open("mysql", "root:@/test") //
	if err != nil {
		log.Fatal("数据库打开失败", err)
	}
	fmt.Println("打开DB  OK~")
	return db
}
func myRet(w http.ResponseWriter, str string, n int) {
	m := MyJson{
		Status: strconv.Itoa(n),
		Msg:    str,
	}
	data, err := json.Marshal(&m)
	fmt.Println("解析出错", err)
	w.Write(data)
}

type MyJson struct {
	Status string
	Msg    string
}
