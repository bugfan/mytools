package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"time"

	example "github.com/rpcx-ecosystem/rpcx-examples3"
	"github.com/smallnest/rpcx/client"
)

var (
	addr = flag.String("addr", "localhost:8972", "server address")
)

func main() {
	flag.Parse()

	d := client.NewPeer2PeerDiscovery("tcp@"+*addr, "")
	xclient := client.NewXClient("Arith", client.Failtry, client.RandomSelect, d, client.DefaultOption)
	defer xclient.Close()

	args := &example.Args{
		A: 10,
		B: 20,
	}

	// for {
	reply := &example.Reply{}
	err := xclient.Call(context.Background(), "Mul", args, reply)
	if err != nil {
		log.Fatalf("failed to call: %v", err)
	}

	log.Printf("%d * %d = %d", args.A, args.B, reply.C)
	time.Sleep(1e9)
	if err = xclient.Call(context.Background(), "Add", args, reply); err != nil {
		log.Println(err)
	}
	log.Printf("%d + %d = %d", args.A, args.B, reply.C)
	// }

	xclient = client.NewXClient("My", client.Failtry, client.RandomSelect, d, client.DefaultOption)
	defer xclient.Close()
	fmt.Printf("查看：%v,%v,%v,%v  end\n", client.Failtry, client.RandomSelect, d, client.DefaultOption)
	ip := "123"
	yes := false
	if err = xclient.Call(context.Background(), "IsIp", &ip, &yes); err != nil {
		log.Println(err)
	} else {
		log.Println("call my rpcx success", yes)
	}

}
