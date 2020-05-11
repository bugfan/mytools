package main

import (
	"log"
	"math/rand"
	"net/http"
	"net/http/httputil"
	"net/url"
)

func NewMultipleHostsReverseProxy(targets []*url.URL) *httputil.ReverseProxy {
	director := func(req *http.Request) {
		target := targets[rand.Int()%len(targets)]
		req.URL.Scheme = target.Scheme
		req.URL.Host = target.Host
		req.URL.Path = target.Path
	}
	return &httputil.ReverseProxy{Director: director}
}

func main() {
	proxy := NewMultipleHostsReverseProxy([]*url.URL{
		// {
		// 	Scheme: "http",
		// 	Host:   "localhost:9091",
		// },
		{
			Scheme: "http",
			Host:   "localhost:9997",
		},
	})
	log.Fatal(http.ListenAndServe(":80", proxy))
}
