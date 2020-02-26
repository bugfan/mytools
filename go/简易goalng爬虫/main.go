package main

import (
  "fmt"
  "net/http"
  "crypto/tls"
"net"
"os"
"io/ioutil"
"flag"
"time"
"strings"
"github.com/bugfan/to"
  "github.com/PuerkitoBio/goquery"
)

var (
	client *http.Client
)

func init() {
	client = new(http.Client)
}
func NewHttpClient() (*http.Client, error) {
	netTransport := &http.Transport{
		Dial: func(netw, addr string) (net.Conn, error) {
			c, err := net.DialTimeout(netw, addr, time.Second*time.Duration(20))
			if err != nil {
				return nil, err
			}
			return c, nil
		},
		MaxIdleConnsPerHost:   20,                              //每个host最大空闲连接
		ResponseHeaderTimeout: time.Second * time.Duration(60), //数据收发5秒超时
		TLSClientConfig:       &tls.Config{InsecureSkipVerify: true},
	}
	client.Timeout = time.Second * 60
	client.Transport = netTransport
	return client, nil
}

var(
	base string="http://anywood.com/demand.html?root=all&category=demand&order=pos&p="
	detal string ="http://anywood.com"
)
func NewRequest(urlStr string)*http.Request{
	fmt.Println("url:",urlStr)
req, _ := http.NewRequest(http.MethodGet, urlStr, nil)

  req.AddCookie(&http.Cookie{
	  Name:  "acw_sc__v2",
	  Value: "5e566d4dd6c0e075f708183fd70843a747558065",
  })
  req.AddCookie(&http.Cookie{
	  Name:  "acw_sc__v3",
	  Value: "5e566d4e0cbd8d3008838b793cff6e1fa19fbd35",
  })

  req.Header.Set("User-Agent", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36")
//   fmt.Println("header:", req.Header)
  return req
}
func ExampleScrape(page string) {
  
	req:=NewRequest(base+page)
	cli, _ := NewHttpClient()
  res, err := cli.Transport.RoundTrip(req)
  if err != nil {
   fmt.Println("client trandport",err)
  }

  defer res.Body.Close()
  if res.StatusCode != 200 {
	fmt.Printf("status code error: %d %s", res.StatusCode, res.Status)
  }

  doc, err := goquery.NewDocumentFromReader(res.Body)
  if err != nil {
	fmt.Println("goquery error",err)
  }

  doc.Find("table .even .com_name").Each(func(i int, s *goquery.Selection) {
    // For each item found, get the band and title
    cap := s.Find("a").Text()
	href ,has:= s.Find("a").Attr("href")
	if has{
		fmt.Printf("%d:%s:%s\n", i, href,cap)
		req:=NewRequest(detal+href)
		cli, _ := NewHttpClient()
		res, err := cli.Transport.RoundTrip(req)
		if err != nil {
			fmt.Println("detail error:",err)
			return			
		}
		defer res.Body.Close()
		bs,err:=ioutil.ReadAll(res.Body)
		if err!=nil{
			fmt.Println("read body error:",err)
			return	
		}
		i1 := strings.LastIndex(href, "/")
		name:=href[i1:]
		ioutil.WriteFile("./file/"+name,bs,0666)
		// os.Exit(4)
	}
  })
}
var (
	start,end string
	v2,v3 string
)
func main() {
	flag.StringVar(&start, "start", "1", "起始页") // if -p=8080 then listen port is 8080 not 9000
	flag.StringVar(&end, "limit", "1", "爬几页")
	flag.StringVar(&v2, "v2", "", "v2")
	flag.StringVar(&v3, "v3", "", "v3")
	flag.Parse()
	if v2=="" ||v3==""{
		fmt.Println("没设置cookie")
		os.Exit(-1)
	}
	a:=to.Int64(start)
	b:=to.Int64((end))
	c:=a+b
	for a=a;a<c;a++{
		ExampleScrape(to.String(a))
	}
}
