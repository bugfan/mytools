参考这个链接 https://colobu.com/2018/08/27/learn-go-module/

需要go 版本1.11之后

使用go mod 之后工程目录里面会多一个go.mod go.sum文件 里面记录了引用的代码包路径

特点：使用go mod之后我们可以在系统的任意一个目录放工程（放到gopath下面就会找不到依赖，如果执意放到gopath下面，就在执行go命令前加入GO111MODULE=on ，放在其他地方就不用加此命令），然后go get的依赖还是会拉到go path下面，但是自己的工程在执行go mod相关命令之后还是会把这些
依赖的代码拉到自己的工程的vendor里面，原理和govendor是一样的，只不过是go 1.11之后自己带了这个功能！
# 常用命令
1. 生成：在工程目录执行（或者其他目录都可以） `go mod init [path]` --> 会在工程目录生成go.mod  
2. 追加未添加的依赖:`go mod tidy` 相当于govendor 的  `govendor add +external`  --> 会从gopath的get下来的代码中找到你引用的代码放到你自己工程的
vendor里面
3. go mod vendor --> go mod vendor 会复制modules下载到vendor中, 貌似只会下载你代码中引用的库，而不是go.mod中定义全部的module

## goproxy配置 
出现：
```
GO111MODULE=on DB_PASSWORD=123456 ADMIN_HOST=localhost:8080  IP_ADDRESS=2.2.2.2 go run  -tags dev main.go
go: github.com/360EntSecGroup-Skylar/excelize@v1.4.1: Get https://proxy.golang.org/github.com/360%21ent%21sec%21group-%21skylar/excelize/@v/v1.4.1.mod: dial tcp 34.64.4.113:443: i/o timeout
```
设置:
```
# Enable the go modules feature
export GO111MODULE=on
# Set the GOPROXY environment variable
export GOPROXY=https://goproxy.io
```
4. 最近发现这个也挺快
```
GOPROXY=https://athens.azurefd.net go get xxx
GOPROXY=https://athens.azurefd.net go mod download
```
