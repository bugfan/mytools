package main

import (
	"fmt"
	"time"
)

type Task interface {
	Run() error
}

type Pool struct {
	//对外接收Task的入口
	EntryChannel chan Task

	worker_num int

	//协程池内部的任务就绪队列
	JobsChannel chan Task
}

func NewPool(cap int) *Pool {
	p := Pool{
		EntryChannel: make(chan Task),
		worker_num:   cap,
		JobsChannel:  make(chan Task),
	}

	return &p
}

func (p *Pool) worker(work_ID int) {
	for task := range p.JobsChannel {
		task.Run()
		fmt.Println("worker ID ", work_ID, " 执行完毕任务")
	}
}

func (p *Pool) Run() {
	//1,首先根据协程池的worker数量限定,开启固定数量的Worker,
	//  每一个Worker用一个Goroutine承载
	for i := 0; i < p.worker_num; i++ {
		go p.worker(i)
	}

	//2, 从EntryChannel协程池入口取外界传递过来的任务
	//   并且将任务送进JobsChannel中
	for task := range p.EntryChannel {
		p.JobsChannel <- task
	}

	//3, 执行完毕需要关闭JobsChannel
	close(p.JobsChannel)

	//4, 执行完毕需要关闭EntryChannel
	close(p.EntryChannel)
}

type T struct {
}

func (s *T) Run() error {
	println("my new task func")
	return nil
}
func main() {
	t := &T{}

	p := NewPool(3)

	i := 0

	go func() {
		for {
			if i < 100 {
				i++
			} else {
				continue
			}
			p.EntryChannel <- t
		}
	}()

	go func() {
		for {
			time.Sleep(5e9)
			i--
		}
	}()

	p.Run()
}
