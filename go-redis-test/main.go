package main

import (
	"reflect"
    "fmt"
    "github.com/garyburd/redigo/redis"
)


//博客地址：http://blog.csdn.net/wangshubo1989/article/details/75050024
type RedisConf struct{
	Url string 
}
func (s * RedisConf)Ip()string{
	r:=strings.Split(s.IpPort(),":")
	if len(r)==2{
		return r[0]
	}
	return ""
}
func (s * RedisConf)Port()string{
	r:=strings.Split(s.IpPort(),":")
	if len(r)==2{
		return r[1]
	}
	return ""
}
func (s * RedisConf)Passsword()string{
	r:=strings.Split(s.Url,"@")
	if len(r)<2{
		return ""
	}
	t:=strings.Split(r[0],"//")
	if len(t)<2{
		return ""
	}
	y:=strings.Split(t[1],":")
	if len(y)<2{
		return ""
	}
	return y[1]
}
func (s * RedisConf)Index()string{
	r:=strings.Split(s.Url,"@")
	if len(r)<2{
		return ""
	}
	t:=strings.Split(r[1],"/")
	if len(t)==2{
		return t[1]
	}
	return ""
}
func (s * RedisConf)IpPort()string{
	r:=strings.Split(s.Url,"@")
	if len(r)<2{
		return ""
	}
	t:=strings.Split(r[1],"/")
	return t[0]
}
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
	//增加取 
// 	   username, err := redis.String(c.Do("GET", "mykey"))
//     if err != nil {
//         fmt.Println("redis get failed:", err)
//     } else {
//         fmt.Printf("Get mykey: %v \n", username)
//     }
	
	//增加过期
// 	 _, err = c.Do("SET", "mykey", "superWang", "EX", "5")
//     if err != nil {
//         fmt.Println("redis set failed:", err)
//     }
	
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
