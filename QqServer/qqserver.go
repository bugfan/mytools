package qq

import (
	"fmt"
	"net"
	"os"
	"time"
)

func Main() {
	fmt.Println("进来了")
	listen, err := net.Listen("tcp", "127.0.0.1:9996")
	if err != nil {
		fmt.Println("－１")
		os.Exit(-1)
	}
	for {
		conn, err := listen.Accept()
		if err != nil {
			fmt.Println(err)
		}
		buf := make([]byte, 0, 50)
		conn.Read(buf)
		time.Sleep(time.Second * 1)
		break
	}
}
