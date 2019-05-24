package main

import (
	"log"
	"net/http"

	"golang.org/x/net/websocket"
)

func echoHandler(ws *websocket.Conn) {
	msg := make([]byte, 100)
	_, err := ws.Read(msg)
	if err != nil {
		log.Println(err)
	}
	log.Printf("收到的消息是: %s\n", string(msg))

	send_msg := `收到你发的了!`

	_, err = ws.Write([]byte(send_msg))
	if err != nil {
		log.Println(err)
	}
}

func main() {
	http.Handle("/test", websocket.Handler(echoHandler))
	log.Fatal(http.ListenAndServe(":9991", nil))
}
