### ssh sockt5代理
1. 谷歌浏览器下载'SwitchyOmega'
2. 链接服务器 'ssh -D 127.0.0.1:65430 root@www.xxx.com'
3. 再浏览器选项里面配置代理参数
```
如果有jw服务器，直接用这种方式内外都可以
```
#### ssh other
1. ssh -D 127.0.0.1:65430 root@www.xxx.com // socks5代理
2. ssh -L 127.0.0.1:9994:abc.net:8080 root@abc.net //本地代理，访问本地9994即访问远程abc.net:8080数据，转口转发，明文传输
3. ssh -L 127.0.0.1:9994:abc.net:8080  root@zxy.cn //本地代理+跳板，访问本地9994即通过zxy.cn访问abc.net:8080,转口转发，ssh加密数据了
4. ssh -R 0.0.0.0:8081:localhost:9991 root@abc.com //远程代理(反向代理)，本地执行，把本地9991端口服务暴露给abc.com:8081。在abc.com即可通过8081访问9991端口数据
```
curl -v https://127.0.0.1:8081
```
5. ssh -R 0.0.0.0:8081:www.baidu.com:443 root@abc.com //同上，代理本地能访问的服务（非本地启动的服务）
```
curl -v https://127.0.0.1:8081 -k -H 'Host:www.baidu.com'
```
  - 说明
  ```
    1. 使用socks5给各种应用做代理场景，用-D
    2. 本地访问不到外边(比如通过外边的端口转发)，在本地🔝指定某个端口，通过这个端口访问远程机器或远程机器能访问到的某个端口的情况，-L
    3. 外边访问不到里边(比如公网访问局域网)，在里面的机器对外提供端口，指定sshkey或密码，连接到远程把本地端口暴露给外边；外边能通过指定的端口访问了，这种情况用 -R
  ```
#### ssh 参数
```
-CqTnN 
-C 为压缩数据，-q 安静模式，-T 禁止远程分配终端，-n 关闭标准输入，-N 不执行远程命令。此外视需要还可以增加 -f 参数，把 ssh 放到后台运行。
```
