### golang 读取request body以后如何恢复
```
buf, e :=ioutil.ReadAll(request.Body)
request.Body = ioutil.NopCloser(bytes.NewBuffer(buf))
```
