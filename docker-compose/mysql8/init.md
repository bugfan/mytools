## 初始化


1.创建用户

  create user '#userName'@'#host' identified by '#passWord';

#userName 代表你要创建的此数据库的新用户账号#host 代表访问权限，如下

%代表通配所有host地址权限(可远程访问)
localhost为本地权限(不可远程访问)
指定特殊Ip访问权限 如10.138.106.102

#passWord 代表你要创建的此数据库的新用密码
🐶本狗要创建的用户是testUser，密码是Haier…123,并且可远程访问⚠️密码强度需要大小写及数字字母，否则会报密码强度不符合⚠️用户名如果重复，会报错ERROR 1396 (HY000): Operation CREATE USER failed for 'testUser'@'%'
create user 'testUser'@'%' identified by 'Haier...123';
复制代码
创建用户.png
2.查看用户
进入mysql系统数据库 

  user mysql; 

查看用户的相关信息

  select host, user, authentication_string, plugin from user;

user mysql; 
select host, user, authentication_string, plugin from user;
复制代码
🐶若展示的信息中有刚加入的用户testUser，则添加成功。切记查看完要切换回操作的数据库,本狗需要操作的是b2b
use b2b; 
复制代码
查看用户.png
3.用户授权

  grant #auth on #databaseName.#table to '#userName'@'#host';

#auth 代表权限，如下

all privileges 全部权限
select 查询权限
select,insert,update,delete 增删改查权限
select,[…]增…等权限

#databaseName 代表数据库名#table 代表具体表，如下

*代表全部表
A,B 代表具体A,B表

#userName 代表用户名
#host 代表访问权限，如下

%代表通配所有host地址权限(可远程访问)
localhost为本地权限(不可远程访问)
指定特殊Ip访问权限 如10.138.106.102

🐶本狗赋予b2b数据库area_code表增删改差权限
grant select,insert,update,delete on b2b.area_code to 'testUser'@'%';

4.刷新,要刷新授权才可生效
 flush privileges;
