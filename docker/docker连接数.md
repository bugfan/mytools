## docker
1. docker -d --default-ulimit nproc = 1024：2048
2. 容器化的service服务于v6时，客户端会和网桥建立v6的socket连接，docker内部本身是v4通信，它会把v6转换成v4处理，当请求或者tcp结束后，他没有办法回ack了，使用host模式，可以直接使用主机资源
