## webvpn的异常处理

### js跨域问题
1. 先把withCredentials设置了看看能不能把cookie带过去解决
2. 加env CORS_SET=[错误链接的host:port]^[发起错误链接的scheme://host:port] ,用‘；’加多个
3. 加env SKIP_HEADER=[忽略请求地址的host:[header,header,header,,,]]
4. xhr请求时候，有的站点特别复杂，js会判断crossOrigin开没开，开了会判断origin，有一种办法就是把他们都设置称对应的值，xhr这边就可以带上cookie了

### flash问题
1. flash播放器问题，其他区域加载正常，此时用360极速浏览器等进行实验
2. flash页面加载遇到301从https转http的，此时如果直接转过去是没有返回的，改成307，继续带上请求尝试
3. flash播放器有问题时，从播放器窗口右键查看未替换地址

### 白名单通配符问题
1. 有的站点增加了新功能，通配符，这种情况如果页面有符合替换的地址，但是‘：’，‘/’等符号有转义符，是无法正常替换的，这种情况加扩展替换临时解决

### cookie,session 问题
1. 请求没有报明显的js错误，同页面下请求接口返回异常，此时先检查cookie，和原网站次请求cookie，对比之后如果看到有cookie的domain没有写在根域，则需要加env ROOT_COOKIE=cas-443.webvpn.test.edu.cn类似的地址，set-cookie时会把domain设置为根域

### cas跳转，或重定向地址问题
1. 加env REPLACE_LOCATION=src｜dst；可以添加多个，使用；分割

### 写扩展替换 (一般情况直接写扩展替换)
1. 根据浏览器报错定位到source文件具体行数，阅读代码，将替换代码设置到webvpn，如果不成功，加入断点进行调试，有的网站需要在无痕浏览器进行调试
2. 网页有转义符号的，webvpn无法正常工作

### 网站配置问题
1. 有的页面配置简单的地址无法打开，需要根据返回的index里面的内容进行跳转，此时应根据返回页面的window.open等地址后缀加入到webvpn配置页

## webvpn后台调试
1. DUMP_BODY=yes 打开webvpn向目标服务器发送的内容，进行比对

## 跨域问题，不带cookie，无法发送请求等
1. 直接升级最新daemon，里面有跨域自动处理；暂时没有把INJECT_JS=true默认开启;我担心访问速度,再测试测试


## 异常返回例子
1. 出现以下情况，说明请求的协议端口有问题导致没有返回
````
root@webvpn:/opt/webvpn# curl -v http://ids-jljy-edu-cn-8080.webvpn.jjtc.com.cn/sso/login?service=http://main.jljy.edu.cn/user/simpleSSOLogin
* Expire in 0 ms for 6 (transfer 0x55d49eea1f50)
* Expire in 1 ms for 1 (transfer 0x55d49eea1f50)
* Expire in 0 ms for 1 (transfer 0x55d49eea1f50)
* Expire in 0 ms for 1 (transfer 0x55d49eea1f50)
* Expire in 0 ms for 1 (transfer 0x55d49eea1f50)
* Expire in 0 ms for 1 (transfer 0x55d49eea1f50)
* Expire in 2 ms for 1 (transfer 0x55d49eea1f50)
* Expire in 0 ms for 1 (transfer 0x55d49eea1f50)
* Expire in 2 ms for 1 (transfer 0x55d49eea1f50)
* Expire in 2 ms for 1 (transfer 0x55d49eea1f50)
* Expire in 2 ms for 1 (transfer 0x55d49eea1f50)
* Expire in 2 ms for 1 (transfer 0x55d49eea1f50)
* Expire in 2 ms for 1 (transfer 0x55d49eea1f50)
*   Trying 111.26.175.21...
* TCP_NODELAY set
* Expire in 200 ms for 4 (transfer 0x55d49eea1f50)
* Connected to ids-jljy-edu-cn-8080.webvpn.jjtc.com.cn (111.26.175.21) port 80 (#0)
> GET /sso/login?service=http://main.jljy.edu.cn/user/simpleSSOLogin HTTP/1.1
> Host: ids-jljy-edu-cn-8080.webvpn.jjtc.com.cn
> User-Agent: curl/7.64.0
> Accept: */*
> 
< HTTP/1.1 200 OK
< Cache-Control: no-cache
< Cache-Control: no-store
< Content-Type: text/html;charset=UTF-8
< Date: Fri, 07 Aug 2020 04:55:14 GMT
< Expires: Thu, 01 Jan 1970 00:00:00 GMT
< Pragma: no-cache
< Server: Apache-Coyote/1.1
< Set-Cookie: JSESSIONID=61A9D666134182031CCA0F74D74428D6;Path=/sso/
< Transfer-Encoding: chunked
< 

````
