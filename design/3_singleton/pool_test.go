package singleton

import "testing"

func TestSingleton(*testing.T) {
	a := NewPool()
	b := NewPool()
	println("a=b:", a == b)
}
