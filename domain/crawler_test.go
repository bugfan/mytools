package main

import (
	"log"
	"runtime/debug"
	"test/utils"
	"testing"
	"time"
)

const (
	URL = `https://www.cngold.org/meitan/`
)

func TestCrawler(t *testing.T) {
	c := utils.NewCrawler(-2)
	log.Println("begin:", time.Now().UTC())
	defer func() {
		log.Println("end:", time.Now().UTC())
	}()
	err := c.Load(URL)
	if err != nil {
		log.Println("error:", err)
		return
	}
	addrs, err := c.Subdomains()
	debug.FreeOSMemory() // 此句竟然是可以手动释放内存，原文是这样说的：“FreeOSMemory forces a garbage collection followed by an attempt to return as much memory to the operating system as possible. (Even if this is not called, the runtime gradually returns memory to the operating system in a background task”
	i := 0
	for k, v := range addrs {
		log.Println("<--- subdomain:", i, k, v, err)
		i++
	}
	domains, err := c.Domains()
	log.Println("---> Domains:", err, domains)
	// select {}
}
