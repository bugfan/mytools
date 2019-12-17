### 记录一些docker磁盘占满的问题

#### 查看情况
1. 输入`df -h`查看下磁盘占用情况 （如果看到有overlay占用接近占满，那你的程序就有可能抛出错误了,类似ERROR: for mongodb Cannot start service mongodb:mkdir/var
/lib/docker/overlay2/******/merged: no space left on device,说设备没有存储空间了）

#### 解决
1. 首先可以执行`docker system prune` 删除一下没用的东西，比如无tag的镜像或关闭的容器，还有标准输出的日志信息，删除之后再次执行`df -h`（如果可行就不用看下面了。重启容器也会删除控制输出的日志。）志
2. 还有可能是你的容器占用了太多空间，比如mysql，mongo 数据库占用了太多，而你的磁盘较小，这个时候可以设置mongode的Snappy改成zlib,但是cpu性能会变高。或者调整oplog


