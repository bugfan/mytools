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
