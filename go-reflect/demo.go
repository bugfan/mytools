package main

import (
	"runtime"
	"fmt"
	"reflect"
)
func main() {  
	fmt.Println("os:",runtime.GOOS)
	//反射
	var h MyHandleS
	reflectVal := reflect.ValueOf(h)
	t := reflect.Indirect(reflectVal).Type()
	newObj := reflect.New(t)
	fmt.Println("end:",h,reflectVal,t,newObj)
	handler, ok := newObj.Interface().(MyHandle)
	fmt.Println("end2:",handler,ok,newObj.Elem())	
	handler.Fuck("fuck")
}
type MyHandle interface{
	Init()
	Fuck(s string) string
}
type MyHandleS struct{
	v int64
	b bool
}
func (s *MyHandleS)Init(){
	fmt.Println("my init()")
}
func (s *MyHandleS)Fuck(str string)string{
	fmt.Println("my fuck()")	
	return str
}
