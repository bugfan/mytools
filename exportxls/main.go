package xls

import (
	"bufio"
	"encoding/csv"
	"fmt"
	"os"
	"strings"

	"github.com/seefan/to"
)

func Exportxlsx() {
	f, err := os.Create("test.xls")
	if err != nil {
		fmt.Println(err)
	}
	defer f.Close()

	f.WriteString("\xEF\xBB\xBF") // 写入UTF-8 BOM

	fx, err := os.Open("./a.txt")
	if err != nil {
		fmt.Println(err)
	}
	reader := bufio.NewReader(fx) //创建读缓冲区
	i := 0
	w := csv.NewWriter(f)
	for {
		s, isEnd, err := reader.ReadLine()
		if err != nil {
			break
		}
		if !isEnd {
			i++
		}
		fmt.Println(s)
		ww := strings.Split(string(s), "|")
		//for _, v := range ww {
		w.Write([]string{to.String(i), ww[1], ww[2], ww[3]})
		//}
		//w.Write([]string{"2", "李四", "24"})
		w.Flush()
		//break
	}
}
