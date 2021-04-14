## 今天发现有必要记录一下go的bug 那种不太好解决的

1.  Accept error: accept tcp [::]:8080: accept4: too many open files; retrying in 1s

2. 'net/http: timeout awaiting response headers' 最近vpn遇到了这个问题，后来通过设置代理client超时时间，解决了，一般国外的网站才有这个问题
```
func newClient() (client.Client, error) {
	client, err := client.NewHTTPClient(client.HTTPConfig{
		Addr:     config.InfluxDBAddr,
		Username: config.InfluxDBUsername,
		Password: config.InfluxDBPassword,
		Timeout:  60 * time.Second,
	})
	return client, err

}

transport := &http.Transport{
		TLSClientConfig: tlsCfg,
		Dial:            dialer,
		ResponseHeaderTimeout: 120 * time.Second,
		MaxIdleConns:          100,
		IdleConnTimeout:       2 * time.Minute,
		TLSHandshakeTimeout:   60 * time.Second,
		DisableCompression:    !config.Compress,
		// ExpectContinueTimeout: 1 * time.Second,
	}
```
3. 超时问题，超时说明到网关是通的，先ping之类的做测试。一般是目标机器出现问题，或者他们防火墙问题。
4. 程序连接数问题，一般是跳动的才是正常的。

#### acme问题
```
www.xxx.cn 签发失败: get directory at 'https://acme-v02.api.letsencrypt.org/directory': Get "https://acme-v02.api.letsencrypt.org/directory": dial tcp: lookup acme-v02.api.letsencrypt.org on 127.0.0.11:53: server misbehaving
```
1. 解析不对，进入app这个容器内部，执行 echo '172.65.32.248 acme-v02.api.letsencrypt.org' > /etc/hosts
