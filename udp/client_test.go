package udp

import (
	"fmt"
	"testing"
)

func TestClient(*testing.T) {
	fmt.Println("-------begin------")
	host := "127.0.0.1:6666"
	m := []byte("test")
	// u, err := NewUDPClient(host)
	// fmt.Println("udp error:", err)
	// err = u.Send(m)
	err := SendTo(host, m)
	fmt.Println("udp send error:", err)
	fmt.Println("-------end------")
}
