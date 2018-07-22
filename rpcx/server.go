package main

import (
	"context"
	"flag"
	"fmt"

	example "github.com/rpcx-ecosystem/rpcx-examples3"
	"github.com/smallnest/rpcx/server"
)

var (
	addr = flag.String("addr", "localhost:8972", "server address")
)

func main() {
	flag.Parse()

	s := server.NewServer()
	//s.RegisterName("Arith", new(example.Arith), "")
	s.Register(new(example.Arith), "")
	s.Register(new(My), "")
	fmt.Println(*addr)
	s.Serve("tcp", *addr)
}

///以下是自己实现的一个调用类 和方法
type My struct {
}

func (t *My) IsIp(ctx context.Context, args *string, yes *bool) error {
	*yes = false
	if *args == "192.168.0.1" {
		*yes = true
	}
	fmt.Printf("%s :%v", *args, *yes)
	return nil
}
