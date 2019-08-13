package main

import (
	"fmt"
)

func init() {
	fmt.Println("Content-Type: test/plain;charset=utf-8\n\n")
}

func main() {
	fmt.Println("This is executing go script")
}
