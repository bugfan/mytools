package main

import (
	"context"
	"fmt"
	"time"
)

func SubTask(ctx context.Context) {
	var name string
	var ok bool
	//获取name值
	if name, ok = ctx.Value("name").(string); !ok {
		name = "world"
	}
	for {
		select {
		case <-time.After(5 * time.Second):
			fmt.Printf("hello %s\n", name)
		case <-ctx.Done(): //Done返回的通道关闭时会匹配
			//进入到结束逻辑从Err获取退出原因
			fmt.Printf("stop subtask, reason %s\n", ctx.Err())
			return
		}
	}
}

func main() {
	ctx := context.Background()                            //从根创建新的Context
	ctx, cancel := context.WithTimeout(ctx, 1*time.Minute) //设置超时时间为1分钟
	defer cancel()                                         //当前函数退出时，取消子任务
	ctx = context.WithValue(ctx, "name", "Hao.IO")         //给Context添加数据
	go SubTask(ctx)
	<-(chan int)(nil)
}
