package main

import (
	"fmt"
	"log"
	"regexp"
)

func main() {
	ss := `-
		--0～
		--
		--200
		-
		--1～
		--500
		--
		--
		--1500
		-
		--4～ 
		--1000
		-
		--0.5～
		`
	sss := `
		--
		--250
		--1500
		-
		--1～
		--500
		--600
		--1500
		-
		--4～ 
		--650
		--800
		--2000
		-
		--7～ 
		--800
		--1000
		--2000
		-
		--11～ 
		--1000 
		--1200
		--2000
		-
		--14～
		--800
		--1000
		--2000
		-
		--18～ 
		--650
		--800
		--2000
		-
		--50～
		--800
		--1000
		--2000
		-
		--65～
		--800
		--1000
		--2000
		-
		--80～
		--800
		--1000
		--2000
		-
		--孕妇（1～12周） 
		--650
		--800
		--2000
		-
		--孕妇（13～27周）
		--810
		--1000
		--2000
		-
		--孕妇（≥28周） 
		--810
		--1000
		--2000
		-
		--乳母 
		--810
		--1000
		--2000`
	reg := `[^-](-){1}(\n){1}`
	data := regexp.MustCompile(reg).ReplaceAllStringFunc(ss, func(inner string) string {
		fmt.Println("i:", inner)
		return inner
	})
	fmt.Println("d", len(data), len(sss))
	chiReg := regexp.MustCompile("[^\u4e00-\u9fa5]")
	log.Println(chiReg.ReplaceAllString("haha 哈哈东方科技dfjkdj2323", ""))

}
