package main

import (
	"bufio"
	"fmt"
	"io"
	"log"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"time"

	"baliance.com/gooxml/document"

	"github.com/gogap/logrus"
	"github.com/gogap/logrus/hooks/file"
)

const (
	my_config = "./my_config.txt"
)

var (
	now_file_name = ""
	fileSuffix    = "_snake.txt"
	detail        = false
)

func init() {
}

type EmptyWriter struct {
}

func (self *EmptyWriter) Write(p []byte) (n int, err error) {
	// nothing to do
	return len(p), nil
}

func readFile(path, token string) {
	if strings.HasSuffix(path, fileSuffix) {
		return
	} else if strings.HasSuffix(path, ".docx") {
		doc, err := document.Open(path)
		if err != nil {
			if detail {
				logrus.Info("打开docx失败:", path)
			}
			return
		}
		for _, para := range doc.Paragraphs() {
			//run为每个段落相同格式的文字组成的片段
			for _, run := range para.Runs() {
				// fmt.Print(run.Text())
				if strings.Contains(run.Text(), token) {
					logrus.Info(token, " -----> ", path)
				}
			}
		}
	} else {
		f, err := os.Open(path)
		if err != nil {
			if detail {
				logrus.Info("打开失败:", path)
			}
			return
		}
		defer f.Close()

		rd := bufio.NewReader(f)
		for {
			line, err := rd.ReadString('\n') //以'\n'为结束符读入一行

			if err != nil || io.EOF == err {
				break
			}
			if strings.Contains(line, token) {
				logrus.Info(token, " -----> ", path)
			}
		}
	}
}
func getFilelist(path, token string) {
	err := filepath.Walk(path, func(path string, f os.FileInfo, err error) error {
		if f == nil {
			return err
		}
		if f.IsDir() {
			return nil
		}
		readFile(path, token)
		return nil
	})
	if err != nil {
		fmt.Printf("filepath.Walk() returned %v\n", err)
	}
}

//互转时间函数
func TimeStampToTimeStr(t int64) string {
	//  yyyy-MM-dd'T'HH:mm:ss'.000Z'
	timeLayout := "2006-01-02 15:04:05"
	dataTimeStr := time.Unix(t, 0).Format(timeLayout)
	// fmt.Println(dataTimeStr)
	return dataTimeStr
}
func main() {
	if len(os.Args) < 2 {
		log.Println("参数有问题! 请在命令行输入: 程序.EXE PATH [DETAIL]")
		return
	}
	if len(os.Args) > 2 && os.Args[2] == "DETAIL" {
		detail = true
	}
	start := time.Now().Unix()
	// 日志
	logrus.SetLevel(logrus.InfoLevel)
	now_file_name = TimeStampToTimeStr(time.Now().Unix()) + fileSuffix
	logrus.AddHook(file.NewHook(now_file_name))

	f, err := os.Open(my_config)
	if err != nil {
		logrus.Info("当前目录找不到配置文件")
		return
	}
	rd := bufio.NewReader(f)
	tokens := make([]string, 10)
	for {
		line, err := rd.ReadString('\n') //以'\n'为结束符读入一行
		su := strings.TrimSpace(line)
		tokens = append(tokens, su)
		if err != nil || io.EOF == err {
			break
		}
	}
	f.Close()

	w := &sync.WaitGroup{}
	for _, v := range tokens {
		if len(v) < 3 {
			continue
		}
		println("A:", v)
		w.Add(1)
		go func(token string) {
			getFilelist(os.Args[1], token)
			w.Done()
		}(v)
	}
	w.Wait()
	logrus.Info("耗时:", time.Now().Unix()-start, "秒")
}
