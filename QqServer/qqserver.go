package qq

import (
	"bufio"
	"fmt"
	"log"
	"net"
	"os"
	"time"
)

func Main() {
	tcpAddr, err := net.ResolveTCPAddr("tcp", "127.0.0.1:9000")
	if err != nil {
		log.Fatalln("地址解析错误", err)
	}
	tcpListener, err := net.ListenTCP("tcp", tcpAddr) //创建监听
	if err != nil {
		log.Fatalln("地址监听失败", err)
	}

	defer tcpListener.Close()
	fmt.Println("开始接受客户端连接：")
	for {
		tcpConn, err := tcpListener.AcceptTCP() //接受客户端连接
		if err != nil {
			log.Fatalln("连接失败~", err)
		}
		//go in(tcpConn)
		go out(tcpConn)
	}
}
func in(tcpConn *net.TCPConn) {

	fmt.Println("客户端连接成功~读")
	reader := bufio.NewReader(tcpConn)
	//buf := make([]byte, 0, 100)
	for {
		buf, _, err := reader.ReadLine()
		if err != nil {
			log.Fatalln("读取数据失败", err)
			tcpConn.Close()
			os.Exit(-1)
		}
		fmt.Println("客户端发来数据：", string(buf))
	}
}
func out(tcpConn *net.TCPConn) {
	fmt.Println("客户端连接成功~写")
	for {
		time.Sleep(time.Second * 3)
		tcpConn.Write([]byte("jjj"))

	}
}
