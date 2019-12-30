## go使用generate打包静态资源为二进制

### 理解
golang 自带的`go generate`命令就是用来打包静态资源，生成ｇｏ文件，保证最后运行时候没有其他依赖，只有一个二进制文件
之前有人用的go-bindata，但是这个工程star比较少，这次直接改用statik了(都来自github)

### 使用
1. 执行`go get github.com/RichCache/verify/statik`,并clone此项目
2. 切入到这个目录执行`go install`,生成一个二进制文件`statik`到你的GOBIN
3. 先写一个generate　go 文件，像下面这样,并保存:
```
//go:generate statik -src=./static
//go:generate go fmt statik/statik.go

package verify

/*
	注释：
	1.这个statik下载玩之后要进行install
	2.使用时候路径填写对，添加到GOPATH可以直接使用,否则使用指定路径指定
	3.执行go generate之后生成go代码，一个map,key就是原来目录的路径
*/

```

4. 上面的`./static`就是你要打包的静态目录,最后生成到当前目录`statik/statik.go`文件中
5. 最后一步就是使用他了，在使用的地方import:
```
import (
	_ "github.com/RichCache/verify/statik" //　引入刚生成的go
	"github.com/rakyll/statik/fs"          
)
```
在你需要使用这个静态资源的时候调用：
```
    statikFS, err := fs.New()
	if err != nil {
		log.Fatal(err)
	}
	// 静态目录
	// fileServer := http.FileServer(http.Dir("./static"))  //这是原来的方式
	fileServer := http.FileServer(statikFS)
    mux.Handle("/api/static/", http.StripPrefix("/api/static/", fileServer))
```

#### statik原理
他把原来的静态资源整体遍历，遍历到的文件的路径，就是key,遍历到的文件读取出来变成字节流就是value，整体是一个哈希结构,放在一个go文件中，
这个文件在初始化的时候实例化这个对象，最后通过自己封装的库调用读取