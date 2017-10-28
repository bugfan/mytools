package redistest

import (
	"fmt"

	"github.com/garyburd/redigo/redis"
)

func Test() {

	re, err := redis.Dial("tcp", "127.0.0.1:6379")
	if err != nil {
		fmt.Println(err)
		return
	}
	v, err := re.Do("SET", "test", "red")
	fmt.Println(v)
	v, _ = redis.String(re.Do("GET", "test"))
	fmt.Println(v)
	//fmt.Println(re)
}
