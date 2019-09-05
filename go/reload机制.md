## 通常在主程序有一个接受信号的地方，收到 relaod信号开始执行部分realod代码
```
// make a chan
c := make(chan os.Signal, 1)
signal.Notify(c, syscall.SIGUSR1)
// waiting signal
go reloadHandler(c)
    
func reloadHandler(c chan os.Signal) {
	for {
		<-c
		//  todo 
    // reload code
	}
}

```

## 在调用reload的时候
```
func reload(ctx *gin.Context) {
	pid := os.Getpid()                // 拿到这个进程的pid
	proc, err := os.FindProcess(pid)
	if err != nil {
		ctx.AbortWithError(http.StatusUnprocessableEntity, err)
		return
	}
	_ = proc.Signal(syscall.SIGUSR1) //往这个进程里面发送信号
}
```
