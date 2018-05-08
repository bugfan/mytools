package main

import (
	"reflect"
    "fmt"
    "github.com/garyburd/redigo/redis"
)


//博客地址：http://blog.csdn.net/wangshubo1989/article/details/75050024

func main() {
    c, err := redis.Dial("tcp", "127.0.0.1:6379")
    if err != nil {
        fmt.Println("Connect to redis error", err)
        return
    }
	defer c.Close()
	type U struct{
		Id int64 `json:"id"`
		User string `json:"user"`
	}
	_, err = c.Do("set", "mykey", 1)
    if err != nil {
        fmt.Println("redis set failed:", err)
	}
	_, err = c.Do("set", "mykey", 2)
    if err != nil {
        fmt.Println("redis set failed:", err)
	}
	_, err = c.Do("set", "mykey", 3)
    if err != nil {
        fmt.Println("redis set failed:", err)
	}
    // username, err := redis.Float64(c.Do("get", "mykey"))

    // 新增加了reids密码验证 
    //_,err:=c.Do("auth", "0129")
	
    username,_:=c.Do("get", "mykey")
    // if err != nil {
    //     fmt.Println("redis get failed:", err)
    // } else {
    //     fmt.Printf("Get mykey: %v \n", username)
	// }
	fmt.Println(reflect.TypeOf(username),username)
	c.Send("set","foo","bar")
	c.Send("set","foo1","bar1")
	c.Flush()
	v,err:=c.Receive()
	fmt.Println(v,err)
}
