
package  main

import (
	"fmt"
	// "time"
)
func main(){
	// Nsq()

	//面向接口
	// Com(&Zhao{})
	//内存检测
	// for {
		// time.Sleep(2e9)
		// log.Println(a,&a)
	// }
	// HttpServer()

	//测试继承
	// Test()

	//测试小写字符序列化
	// dTest()

	//测试那天的接口interface
	tasks()
}
type Task interface{
	Run()
}
type Pig struct{
	Name string
}
func(s * Pig)Run(){
	fmt.Println("pig:",s.Name)	
}
type Sheep struct{
	Name string
}
func(s * Sheep)Run(){
	fmt.Println("Sheep:",s.Name)	
}
func getTasks() []Task{
	var ts []Task
	ts=append(ts,&Pig{Name:"zxy"},&Sheep{Name:"jjj"})
	return ts
} 
func tasks(){
	for _,v:=range getTasks(){
		fmt.Println("call:")
		v.Run()
	}
}
