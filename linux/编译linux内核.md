### 编译 linux内核 & 
1. cd 到源码包文件夹下，安装make时依赖工具
```
cd linuxt-5.11/
apt-get install git
apt-get install fakeroot
apt-get install build-essential 
apt-get install ncurses-dev 
apt-get install xz-utils
apt-get install libssl-dev
apt-get install bc
apt-get install flex
apt-get install libelf-dev
apt-get install bison
```
2. 如果有make的脏数据需要清理掉
```
make clean
```
3. 拷贝配置到当前目录
```
cp /boot/config-$(uname -r) .config
```
4. 生成配置（选择那个general的配置）
```
make menuconfig
```
5. 编译，依次执行
```
make
make modules_install
sudo make install
```

6. 重启（一般重启就行，不行配置grub）

#### 注意事项
```
make中途遇到问题，停止查下百度谷歌必应按照下必要的依赖即可
```
