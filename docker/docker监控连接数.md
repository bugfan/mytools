1. 查找docker的进程号 ：

docker inspect -f '{{.State.Pid}}' <containerid> 
$ docker inspect -f '{{.State.Pid}}' 49b98b2fbad2
1840
2. 查看连接： 

sudo nsenter -t <pid> -n netstat | grep ESTABLISHED
$ nsenter -t 1840 -n netstat |grep ESTABLISHED
udp        0      0 node-2:45963        10.254.0.2:domain       ESTABLISHED
从上面可以看到，只有1个tcp连接
