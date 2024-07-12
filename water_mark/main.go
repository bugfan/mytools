package main

import (
	"log"
	"net/http"
)

func main() {
	// 指定静态文件目录
	fs := http.FileServer(http.Dir("./"))

	// 将静态文件目录绑定到路由
	http.Handle("/", http.StripPrefix("/", fs))

	// 启动HTTP服务器
	log.Println("Starting server on :8080...")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal(err)
	}
}
