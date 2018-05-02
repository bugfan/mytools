package main

import (
	"database/sql"
	"fmt"
	_ "github.com/mattn/go-sqlite3"
	"log"
	"os"
	"github.com/gin-gonic/gin/json"
)

type User struct {
	UserId int
	Uname  string
}

func main() {
	log.Println("zxy")
	os.Remove("./foo.db")
	db, err := sql.Open("sqlite3", "./foo.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	sql := `create table user (userId integer, uname text);`
	db.Exec(sql)
	sql = `insert into user(userId, uname) values(1, 'Mike');`
	db.Exec(sql)
	sql = `insert into user(userId, uname) values(2, 'John');`
	db.Exec(sql)
	rows, err := db.Query("select * from user")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()
	var users []User = make([]User, 0)
	for rows.Next() {
		var u User
		rows.Scan(&u.UserId, &u.Uname)
		users = append(users, u)
	}
	fmt.Println(users)
	bs,_:=json.Marshal(users)
	fmt.Println(string(bs))
}
