### 简述
1. 自带dns 自带负载均衡
2. docker 12以后自带docker swarm无需安装
3. `docker node` `docker swarm`等命令开头操作

### 原理
若干太机器，互相能通，一般有一台管理机，其他的是worker，运行模式一般有两种，一种是vip另外是dnsrr(难怪多多说要搞个什么vip)，一个域名指到一台机器，自动
根据模式把请求通过之前初始化好的ip端口转发过去；启动时候先启动管理机，然后再worker机器加入集群，并且可以横向扩展
### 参考案例
https://www.cnblogs.com/mybxy/p/11969747.html
