## go实现装饰器模式　(斐波那契数列)
```
package main

import (
	"fmt"
)

type Func func(n int)int



func counter(f *Func, count *int) *Func{
	org := *f
	*f = func(n int) int{
		*count++
		return org(n)
	}
	return f
}

func NewFib() *Func{
	var fib Func
	fib = func(n int) int {
		if n == 0 {
			return 0
		}
		if n == 1 {
			return 1
		}
		return fib(n-1) + fib(n-2)
	}
	return &fib
}


func main() {
	fib := NewFib()
	
	var count int
	fib = counter(fib, &count)
	fmt.Println((*fib)(5))
	fmt.Println("count: ", count)
}

```
