### swarm + keepalived
#### swarm
1. 启动管理节点 
```
docker swarm init --advertise-addr 192.168.99.107
```
2. 到工作节点，或者直接再管理节点
```
docker swarm join --token SWMTKN-1-4oogo9qziq768dma0uh3j0z0m5twlm10iynvz7ixza96k6jh9p-ajkb6w7qd06y1e33yrgko64sk 192.168.99.107:2377
```
```
或者直接再管理节点执行：
1. docker service create --replicas 1 --name helloworld alpine ping docker.com
扩展
2. docker service scale helloworld=2
```
```
docker stack deploy -c [compose file path] name //这种的扩充需要再compose里面指定实例个数
```
#### 页面管理 推荐使用rancher
```
https://docs.rancher.cn/rancher1x/infrastructure/windows.html#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA-windows-%E7%8E%AF%E5%A2%83
```
#### 分流
1. 加机器使用nginx或者haproxy
2. 不用加机器，直接在负载机器安装keeplived，搞一个虚拟ip，外部把域名知道这个ip
