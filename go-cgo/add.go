package main

import "C"

//export add
func add(a, b int) int {
	return a + b
}

func main() {
	// 这个函数是必须的，但是实际上并不会被执行
}
