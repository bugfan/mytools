### 斗鱼tv服务器程序容器化


- **搭建方案** ：搭建私有仓库
- **系统平台** ：centos


#### 容器化部署流程

![Alt text](./douyu-docker.png)

-------------------


#### 依赖
- **依赖软件**：
1. docker
2. docker-compose
- **依赖镜像**：
1. registry    # 功能:存储镜像
2. hyper/docker-registry-web # 功能:提供web网管, 方便管理镜像

#### Ubuntu 安装步骤
  [点击这里](https://blog.csdn.net/nimei31/article/details/80865601)

#### Windows 安装步骤
  [点击这里](http://www.runoob.com/docker/windows-docker-install.html)

#### Centos 安装步骤
- **一 安装docker** ：
1. 安装docker (CentOS 系统的内核版本需要高于 3.10 ,centos7 以下版本不建议安装docker)
sudo yum update
```
yum -y install docker-io
```
2. 启动docker deamon 
```
service docker start
```
- **二 安装docker-compose** ：
1. 安装python-pip
```
yum install python-pip
```
2. 无安装包
```
yum -y install epel-release
```
3. 升级python-pip
```
pip install --upgrade pip
```
4. 安装docker-compse
```
pip install docker-compose --ignore-installed requests
```
5. 查看版本号
```
docker-compose -version
```


#### 使用步骤
- **一 拉取依赖docker image** ：
	1. 拉取仓库管理 registry
	```
	docker pull registry 
	```
	2.  拉取web管理 hyper/docker-registry-web
	```
	docker pull hyper/docker-registry-web
	```

- **二 docker 单实例启动 (在下面第五步提供了docker-compose启动方式，更简便)** ：
	1. 启动仓库
	```
	$ mkdir /var/dockerRegistry # 创建docker存储镜像的挂载目录
	$ docker run -d -p 5000:5000 --restart=always --name=registry-srv -v /var/dockerRegistry:/var/lib/registry registry  #  启动 registry
	```
	2. 启动web管理
	```
	$ docker run -it -p 8080:8080 --restart=always --name registry-web --link registry-srv -e REGISTRY_URL=http://registry-srv:5000/v2 -e REGISTRY_NAME=localhost:5000 hyper/docker-registry-web  # 启动web网管
	```

- **三 docker-compose 启动 **:
	1. cd 到docker-rep目录下 ’ls‘ 可以看到docker-compose.yml
	2. 执行如下命令来后台启动:
	```
	$ docker-compose up -d  # 启动 (第一次会自动拉取镜像)
	$ docker-compose down   # 停止
	```
- **四  使用方式 **:
	1. 访问 [这个地址](http://172.16.1.155:8082/)  可以查看公司镜像仓库都有哪些镜像 http://172.16.1.155:8082/
	2. 我们可以使用 'docker push/pull' 命令从仓库拉取镜像或者上传镜像
	3. 举例:
	```
	 推送镜像 sudo docker push  172.16.1.155:5000/test.server:latest
	 拉取镜像 sudo docker pull  172.16.1.155:5000/test.server:latest
	```

## 反馈与建议
- 企业QQ：<zhaoxiaoyuan@douyu.tv>
- 邮箱：<zhaoxiaoyuan@douyu.tv>

---------




