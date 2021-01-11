## 限制service资源

1. 加入deploy
```
version: "3.7"
services:
  redis:
    image: redis:alpine
    container_name: testredis
    deploy:
      resources:
        limits:
          cpus: '0.50'
          memory: 500M
```
2. 升级compose版本,1.20+才行
```
sudo curl -L https://get.daocloud.io/docker/compose/releases/download/1.26.2/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
docker-compose --version
```
3. 启动加参数
```
docker-compose --compatibility up -d
```
