package main

import (
	"log"
	"math/big"
	"net"
)

func main() {
	ipv6Decimal := IP6toInt(net.ParseIP("FE80::0202:B3FF:FE1E:8329"))
	ipv6Decimal2 := IP6toInt(net.ParseIP("FE80::0202:B3FF:FE1E:8328"))
	i41 := IP4toInt(net.ParseIP("192.168.1.101"))
	i42 := IP4toInt(net.ParseIP("192.168.1.109"))

	log.Println("地址:", ipv6Decimal, ipv6Decimal2, i41, i42)
}
func IP6toInt(IPv6Address net.IP) *big.Int {
	IPv6Int := big.NewInt(0)

	// from http://golang.org/pkg/net/#pkg-constants
	// IPv6len = 16
	IPv6Int.SetBytes(IPv6Address.To16())
	return IPv6Int
}
func IP4toInt(IPv4Address net.IP) *big.Int {
	IPv4Int := big.NewInt(0)
	IPv4Int.SetBytes(IPv4Address.To16())
	return IPv4Int
}
