package main

import (
	"bufio"
	"fmt"
	"net"
	"os"
	"time"
)

func sender(conn net.Conn) {
	words := "hello world!"
	conn.Write([]byte(words))
	fmt.Println("send over")

}

func main() {
	server := "127.0.0.1:9000"
	tcpAddr, err := net.ResolveTCPAddr("tcp", server)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Fatal error: %s", err.Error())
		os.Exit(1)
	}

	conn, err := net.DialTCP("tcp", nil, tcpAddr)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Fatal error: %s", err.Error())
		os.Exit(1)
	}
	//go write(conn)
	go read(conn)
	for {

	}
}

func write(conn *net.TCPConn) {
	for {
		time.Sleep(time.Second * 1)
		if _, err := conn.Write([]byte("zxy")); err != nil {
			fmt.Println("连接出错")
			conn.Close()
			os.Exit(-1)
		}
	}
	conn.Close()
}
func read(conn *net.TCPConn) {
	reader := bufio.NewReader(conn)
	buf := make([]byte, 0, 100)
	for {
		time.Sleep(time.Second * 3)
		n, err := reader.Read(buf)
		if err != nil {
			fmt.Println("客户端接受出错")
			os.Exit(-2)
		}
		fmt.Println(string(buf), n)
	}
}
