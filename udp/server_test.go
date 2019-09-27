package udp

import (
	"fmt"
	"os"
	"testing"

	"github.com/sirupsen/logrus"
)

func TestServer(t *testing.T) {
	fmt.Println("-----begin server------")
	u, err := NewUDPServer(UDP_SERVER_ADDR)
	if err != nil {
		logrus.Error("New UDPServer error:", err)
		os.Exit(-1)
	}
	u.Use(&testReceive{}) // you can use your struct ,need implement Spit
	u.Receive()
	fmt.Println("-----end server------")
}
