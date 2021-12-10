package main

import (
	"flag"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os/exec"
)

var (
	addr   *string
	cert   *string
	key    *string
	bundle *string
)

func init() {
	addr = flag.String("addr", ":9991", "服务器监听地址")
	cert = flag.String("cert", "./cert/cert.crt", "证书文件路径")
	key = flag.String("key", "./cert/cert.key", "证书密钥文件路径")
	bundle = flag.String("bundle", "./cert/bundle.crt", "中间证书文件路径")
	flag.Parse()
}

const (
	IN  = "./in.mobileconfig"
	OUT = "./out.mobileconfig"
)

func main() {
	log.Printf("server listen at %v\n", *addr)
	http.HandleFunc("/", CMD)
	log.Fatal(http.ListenAndServe(*addr, nil))
}
func CMD(w http.ResponseWriter, r *http.Request) {
	file, _, err := r.FormFile("file")
	if err != nil {
		w.Write([]byte(err.Error()))
		return
	}
	data, err := ioutil.ReadAll(file)
	if err != nil {
		w.Write([]byte(err.Error()))
		return
	}
	ioutil.WriteFile(IN, data, 0777)
	sh := fmt.Sprintf(`openssl smime -sign -in %s -out out.mobileconfig -signer %s -inkey %s -certfile %s -outform der -nodetach`, IN, *cert, *key, *bundle)
	log.Printf("cmd is '%v'\n", sh)
	res, err := Command(sh)
	if err != nil {
		log.Println("cmd result:", string(res))
		w.Write([]byte(err.Error()))
		return
	}
	data, err = ioutil.ReadFile(OUT)
	if err != nil {
		log.Println("readfile error:", err)
		w.Write([]byte(err.Error()))
		return
	}
	w.Write(data)
}
func Command(cmd string) ([]byte, error) {
	c := exec.Command("bash", "-c", cmd)
	return c.CombinedOutput()
}
