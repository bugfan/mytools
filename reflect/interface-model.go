package main

import (
	"encoding/json"
	"log"
	"reflect"
)

type Dog struct {
	A string
	B int64
}
type Snake struct {
	A string
	B int
	C float64
}
type APIContent interface {
}

func testReflect() {
	log.Println("reflect:")
	dog := &Dog{}
	modelT := reflect.TypeOf(dog)
	log.Println("type:", modelT)
	log.Println("type kind:", modelT.Kind())
	log.Println("typek:", modelT.Kind() == reflect.Ptr)
	modelT = modelT.Elem()
	log.Println("model elem:", modelT)
	// apicontent
	log.Println("apicontent---------------------------\r\n")
	snake := &Snake{}
	modelTs := reflect.TypeOf(snake)
	log.Println("type: s ", modelTs)
	log.Println("type kind:s ", modelTs.Kind())
	log.Println("typek:s ", modelTs.Kind() == reflect.Ptr)
	modelTs = modelTs.Elem()
	log.Println("model elem s :", modelTs)

	log.Println("copy---------------------------\r\n")

	contentValue := reflect.New(modelTs)
	content := contentValue.Interface().(APIContent)
	jsonText := `{
		"A":"user1",
		"B":45
	}`
	err := json.Unmarshal([]byte(jsonText), &content)
	log.Println("Err:", err)
	log.Println("content:", content)

}
func main() {
	testReflect()
}
