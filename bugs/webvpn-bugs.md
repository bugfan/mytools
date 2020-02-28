## webvpn的异常处理

### js跨域问题
1. 先把withCredentials设置了看看能不能把cookie带过去解决
2. 加env CORS_SET=[错误链接的host:port]^[发起错误链接的scheme://host:port] ,用‘；’加多个
3. 加env SKIP_HEADER=[忽略请求地址的host:[header,header,header,,,]]

### flash
