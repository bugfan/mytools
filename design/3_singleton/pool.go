package singleton

import (
	"sync"
)

type Pool struct {
}

var pool *Pool
var once sync.Once

func NewPool() *Pool {
	once.Do(func() {
		pool = &Pool{}
	})
	return pool
}
