package ssdb

import (
	"fmt"
	"os"

	"github.com/ssdb/gossdb/ssdb"
)

func Test() {

	ip := "127.0.0.1"
	port := 8888
	db, err := ssdb.Connect(ip, port)
	if err != nil {
		os.Exit(1)
	}
	db.Set("a", "zxy")
	var v interface{}
	v, err = db.Get("a")
	fmt.Println(v, err)

	db.Do("zset", "z", "a", 3) //参数：1命令，2ｋｅｙ，，，
	db.Do("multi_zset", "z", "b", -2, "c", 5, "d", 3)
	resp, err := db.Do("zrange", "z", 0, 3) //参数：１存取命令，２key,3数据起始下表,4数据长度
	if err != nil {
		os.Exit(1)
	}
	if len(resp)%2 != 1 {
		fmt.Printf("bad response")
		os.Exit(1)
	}

	fmt.Printf("Status: %s\n", resp[0])
	fmt.Printf("  %s : %3s\n", resp[0], resp[1]) //竟然打了ok
	for i := 1; i < len(resp); i += 2 {
		fmt.Printf("  %s : %3s\n", resp[i], resp[i+1]) //
	}

	db.Close()
}
