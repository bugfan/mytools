### 常用 golang交叉编译 命令 ()
```
目标机器硬件是amd64，操作系统是linux
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build main.go

目标机器硬件是amd64，操作系统是win
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build main.go

目标机器硬件是amd64，操作系统是mac
CGO_ENABLED=0 GOOS=darwin  GOARCH=amd64  go build main.go

目标机器硬件是x86，操作系统是win/linux (x86 32位的比较少见)
CGO_ENABLED=0 GOOS=linux  GOARCH=386  go build main.go
CGO_ENABLED=0 GOOS=windows  GOARCH=386  go build main.go

目标机器硬件是arm64/arm32，操作系统是linux (arm32位的多见与嵌入式设备，arm64多见于新形服务器，例如华为鲲鹏服务器)
CGO_ENABLED=0 GOOS=linux  GOARCH=arm64  go build main.go  //64位字长arm架构硬件
CGO_ENABLED=0 GOOS=linux  GOARCH=arm  go build main.go //32位arm架构硬件
```
