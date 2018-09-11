package utils

import (
	"crypto/tls"
	"errors"
	"log"
	"net"
	"net/http"
	"net/url"
	"strings"
	"sync"
	"time"

	"github.com/PuerkitoBio/goquery"
)

const (
	DELAY_TIME = 5
)

type emptyStruct struct {
}
type Crawler interface {
	Load(url string) error
	Subdomains() ([]string, error)
	Domains() ([]string, error)
}

func NewCrawler(args ...int64) Crawler {
	var delay int64 = 0
	if len(args) > 0 {
		delay = args[0]
	}
	if delay < DELAY_TIME {
		delay = DELAY_TIME
	}
	return &myCrawler{delay: delay}
}

type myCrawler struct {
	delay int64 // 请求延时 单位-秒
	doc   *goquery.Document
	m     sync.Mutex
}

func timeoutDialer(cTimeout time.Duration, rwTimeout time.Duration) func(net, addr string) (c net.Conn, err error) {
	return func(netw, addr string) (net.Conn, error) {
		conn, err := net.DialTimeout(netw, addr, cTimeout)
		if err != nil {
			return nil, err
		}
		conn.SetDeadline(time.Now().Add(rwTimeout))
		return conn, nil
	}
}
func (s *myCrawler) Load(url string) error {
	// Use timeout
	readWriteTimeout := 1000 * time.Millisecond
	c := http.Client{
		Transport: &http.Transport{
			TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
			Dial:            timeoutDialer(time.Duration(s.delay*1000000000), readWriteTimeout),
		},
	}
	req, err := http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		log.Println("New Request error:", err)
		return err
	}
	res, err := c.Do(req)
	if err != nil {
		log.Println("Load html error:", err) // return errors.New("Load html timeout! ")
		return err
	}
	defer res.Body.Close()
	if res.StatusCode != 200 {
		log.Printf("Load status code error: %d %s\n", res.StatusCode, res.Status)
		return err
	}
	// Load the HTML document
	doc, err := goquery.NewDocumentFromReader(res.Body)
	if err != nil {
		log.Println("Load body to document error:", err)
		return err
	}
	s.doc = doc
	return nil
}
func (s *myCrawler) Subdomains() (domains []string, err error) {
	addrs, err := s.parseAddr()
	if err != nil {
		return nil, err
	}
	m := s.parseToMap(addrs)
	return s.paseToSlice(m), nil
}
func (s *myCrawler) Domains() (domains []string, err error) {
	addrs, err := s.parseAddr()
	if err != nil {
		return nil, err
	}
	m := s.parseToMap(addrs)
	domains = s.paseDomain(m)
	return
}
func (s *myCrawler) parseAddr() (addrs []string, err error) {
	if s.doc == nil {
		return nil, errors.New("HTML Doc is nil!")
	}
	s.m.Lock()
	defer s.m.Unlock()
	urls := []string{}
	s.doc.Find(`body a`).Each(func(i int, s *goquery.Selection) {
		link, exists := s.Attr("href")
		if !exists {
			return
		}
		urls = append(urls, link)
	})
	var obj *url.URL
	for _, v := range urls {
		obj, err = url.Parse(v)
		if err == nil && obj.Host != "" {
			addrs = append(addrs, obj.Host)
		}
	}
	return addrs, nil
}

// 去重
func (s *myCrawler) parseToMap(addrs []string) map[string]*emptyStruct {
	m := make(map[string]*emptyStruct)
	var v string
	for _, v = range addrs {
		m[v] = nil
	}
	return m
}
func (s *myCrawler) paseToSlice(m map[string]*emptyStruct) (domains []string) {
	var k string
	for k, _ = range m {
		domains = append(domains, k)
	}
	return
}
func (s *myCrawler) paseDomain(m map[string]*emptyStruct) (domains []string) {
	var (
		k, tmp string
		l      int
		tokens []string
	)
	tmpMap := make(map[string]*emptyStruct)
	for k, _ = range m {
		tokens = strings.Split(k, ".")
		l = len(tokens)
		if l < 2 {
			continue
		}
		if tokens[l-1] == "cn" {
			tmp = tokens[l-3] + "." + tokens[l-1]
		}
		tmp = tokens[l-2] + "." + tokens[l-1]
		tmpMap[tmp] = nil
	}
	return s.paseToSlice(tmpMap)
}
