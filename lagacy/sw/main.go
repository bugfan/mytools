package main

import (
	"log"
	"net/http"

	"github.com/sirupsen/logrus"
)

func main() {

	s := http.NewServeMux()
	s.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("./"))))

	listen := ":8080"
	logrus.Infof("Listening for proxy on http://%s\n", listen)
	log.Fatal(http.ListenAndServe(listen, s))
}
