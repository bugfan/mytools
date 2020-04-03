package main

import (
	"fmt"
	"time"
)

func main() {
	// 两个生产者
	chans := make(chan Task)
	go func() {
		for {
			chans <- NewTask(1)
			time.Sleep(2e8)
		}
	}()
	go func() {
		for {
			chans <- NewTask(2)
			time.Sleep(4e8)
		}
	}()

	myts := make(map[int]T)
	time.Sleep(1e9)
	// 三个消费者
	go func() {
		for i := 0; i < 8; i++ {
			t := NewMyT(i, 10)
			t.Run()
			myts[i] = t
		}
	}()
	time.Sleep(1e9)

	go func() {
		for c := range chans {
			for _, m := range myts {
				if m.Len() < 1 {
					m.In(c)
				}
				m.In(c)
			}
		}
	}()

	<-(chan int)(nil)
}

type T interface {
	In(Task)
	Run()
	Len() int
}
type MyT struct {
	cs chan Task
	id int
}

func NewMyT(i, n int) T {
	cs := make(chan Task, n)
	c := &MyT{
		cs: cs,
		id: i,
	}
	return c
}

func (s *MyT) In(task Task) {
	s.cs <- task
}
func (s *MyT) Len() int {
	return len(s.cs)
}
func (s *MyT) Run() {
	go func() {
		for {
			for t := range s.cs {
				fmt.Println("my task id:", s.id)
				t.Run()
			}
		}
	}()
}

type W struct {
	d interface{}
}

func (w *W) Run() {
	fmt.Println("ID:", w.d)
}
func NewTask(n int) Task {
	w := &W{d: n}
	return w
}

type Task interface {
	Run()
}
