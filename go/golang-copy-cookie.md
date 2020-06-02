### 记录下来，做代理使用此copyCookie()进行cookie拷贝,直接拷贝会有问题
```
func copyCookie(dst, src *http.Request, exclude []string) {
	cookieStr := src.Header.Get("Cookie")
	cookies := strings.Split(cookieStr, ";")
	var buffer bytes.Buffer
	l := len(cookies)
	for idx, cookie := range cookies {
		kv := strings.SplitN(cookie, "=", 2)
		key := strings.TrimSpace(kv[0])
		if utils.StringInSlice(key, exclude) {
			continue
		}
		if len(kv) > 1 && key != config.CookieName {
			value := fmt.Sprintf("%s=%s", key, kv[1])
			if (idx + 1) < l {
				value = value + ";"
			}
			buffer.WriteString(value)
		}
	}
	dst.Header.Set("Cookie", buffer.String())
}

```
