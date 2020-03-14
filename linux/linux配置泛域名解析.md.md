### dnsmasq
1. 安装它 'apt-get install dnsmasq'
2. 改配置文件 'vim /etc/dnsmasq.conf' 
```
# 严格按照 resolv-file 文件中的顺序从上到下进行 DNS 解析, 直到第一个成功解析成功为止
strict-order

# 监听的 IP 地址
listen-address=127.0.0.1

# 设置缓存大小
cache-size=10240

# 泛域名解析，访问任何 baidu.com 域名都会被解析到 6.6.6.6
address=/abc.com/6.6.6.6 # 后面这个6.6.6.6是你自己服务监听的地址，我改称127.0.0.1
```
3. 生效 'systemctl enable --now dnsmasq' (如果没有生效就去重启下机器，我ubuntu是得重启)
 
4. 测试 用'systemctl status dnsmasq'或者 'ping命令测试下你自己设置的地址'