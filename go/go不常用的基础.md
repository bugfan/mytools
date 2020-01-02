## 记录golang经常不用的那些基础
1. go run [参数]
2. go run -work main.go //列出此次运行预先编译的二进制的目录
go build -a // 所有设计到的代码都会重新编译，否则不加-a 是只编译新添加的未被编译的包
go install  //之后需要指定包路径，它会帮你编译成.a文件
go get //支持github gitlab gogs自己搭建的也可行,只要是支持git,Mercurial(hg),SVN,Bazaar这几个的一个就可以go get
go get //拉代码到GOPATH(第一个工作区)下src
go get -d //只下载，不安装
go get -fix //先修复，再安装
go get -u //更新本地已经下载好的
slice5 := numbers4[4:6:8] //拿到[5 7]
copy(slice5, slice6)  //内置函数 拷贝 slice6 拷贝到slice5按照从左往右的顺序
var numbers4 = [...]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10} //定义切片,不定长

### 看到了一种以类为约束的实现方式，通常都是以接口；还有atomic
```
package main

import (
	"fmt"
	"strconv"
	"sync/atomic"
)

// 员工ID生成器
type EmployeeIdGenerator func(company string, department string, sn uint32) string

// 默认公司名称
var company = "Gophers"

// 序列号
var sn uint32

// 生成员工ID
func generateId(generator EmployeeIdGenerator, department string) (string, bool) {
	// 这是一条 if 语句，我们会在下一章讲解它。
	// 若员工ID生成器不可用，则无法生成员工ID，应直接返回。
	if generator == nil {
		return "", false
	}
	// 使用代码包 sync/atomic 中提供的原子操作函数可以保证并发安全。
	newSn := atomic.AddUint32(&sn, 4)
	return generator(company, department, newSn), true
}

// 字符串类型和数值类型不可直接拼接，所以提供这样一个函数作为辅助。
func appendSn(firstPart string, sn uint32) string {
	return firstPart + strconv.FormatUint(uint64(sn), 10)
}

func main() {
	var generator EmployeeIdGenerator
	generator = func(company string, department string, sn uint32) string {
		return appendSn(company+"-"+department+"-", sn)
	}
	fmt.Println(generateId(generator, "RD"))
}

```

### 接口转类型，类型转接口：
```
// 类转接口
myCat := Cat{"Little C", 2, "In the house"}
animal, ok := interface{}(&myCat).(Animal)  //类转成Animal接口

//接口转类:
	v, ok := animal.(*Cat)  //　接口断言成实际类
	fmt.Printf("%v, %v\n", ok, v)
```
