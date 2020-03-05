### 网卡调试工具
1. 安装工具
```
apt-get install ethtool
```
2. 查看
```
查看当前网卡的buffer size情况
ethtool -g eth0
Ring parameters for eth0:
Pre-set maximums:
RX:             4096
RX Mini:        0
RX Jumbo:       0
TX:             4096
Current hardware settings:
RX:             256
RX Mini:        0
RX Jumbo:       0
TX:             256
```
3. 设置,改网卡缓冲区大小
```
ethtool -G eth0 rx 2048

```
4. 查看网卡丢包情况
```
ifconfig [网卡名]

```
