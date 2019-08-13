package main

import (
	"fmt"
	"log"
	"net/http"
	"net/http/cgi"
)

func CGIHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("get request...", r.URL.Path)
	handler := new(cgi.Handler)
	handler.Path = "/usr/local/go/bin/go" // 运行脚本位置

	script := "/home/zhao/go-proj/src/wu/cgi" + r.URL.Path

	handler.Dir = "/home/zhao/go-proj/src/wu/cgi" // 自己指定可执行文件地址
	args := []string{"run", script}
	handler.Args = append(handler.Args, args...)       // 命令行执行 参数 go run file.go ...
	handler.Env = append(handler.Env, "ENV_TEST=test") // 以环境变量的方式传给cgi

	handler.ServeHTTP(w, r)
}

func main() {
	http.HandleFunc("/", CGIHandler)
	fmt.Println("start web server....")
	log.Fatal(http.ListenAndServe(":8888", nil))
}
