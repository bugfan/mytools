package main

import (
	"log"
)

//****公用区*******
type Do interface {
	fuck(m *map[string]interface{}) string
	make(m *map[string]interface{}) interface{}
	sleep(m *map[string]interface{}) int
}
type Liu struct {
}

func (s *Liu) fuck(m *map[string]interface{}) string {
	return "nil str"
}
func (s *Liu) make(m *map[string]interface{}) interface{} {
	return m
}
func (s *Liu) sleep(m *map[string]interface{}) int {
	return 100
}

//****公用区*******

func main() {
	// Nsq()

	//面向接口
	//a:=Zhao{Name:"zxy"}
	//b:=Zhao{Name:"liu"}
	com(&Zhao{})
}

//委托
func com(h Do) {
	log.Println(h.fuck(&map[string]interface{}{"my fuck:": "ii"}))
	log.Println(h.make(&map[string]interface{}{"my make:": "ii"}))
	log.Println(h.sleep(&map[string]interface{}{"my sleep:": "ii"}))
}

//*******自定义区*******
type Zhao struct {
	Liu
}

func (s *Zhao) fuck(m *map[string]interface{}) string {
	log.Println(m)
	return "zhao fuck"
}
func (s *Zhao) make(m *map[string]interface{}) interface{} {
	log.Println(m)
	return "zhao make"
}

//可以写自己的方法
func (s *Zhao) sleesp(m *map[string]interface{}) interface{} {
	log.Println(m)
	return "zhao make"
}
func (s *Zhao) sleep(m *map[string]interface{}) int {
	log.Println(m)
	return len("zhao sleep")
}
