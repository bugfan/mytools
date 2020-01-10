## golang json xml 序列化与反序列化的一些技巧

1. 多种数据类型转某一个类型

### 1.10今天发现一个奇怪的现象

说起来挺有意思:

```
package main

import (
	"encoding/json"
	"fmt"
)
func main() {
	post := make(map[int64]string)
	err = json.Unmarshal([]byte(`{"345":"e"}`), &post)
	fmt.Println("e:", post)
}
```
1. 当序列化的时候如果map的key是整数类型，那么它转json之后的key是这个数字加引号的，因为不加引号就不是json标准格式了。
2. 反序列化时候go不能把float类型的key转成对应map[float64],不支持
3. 并且反序列化map[float64]也不行，报错:json: unsupported type: map[float64]string ,也就是说语言对应json的序列化，key只能是int或者string
