#!/bin/bash

# 要备份的数据库名，多个数据库用空格分开
dbname='meiyue'

# 备份文件要保存的目录
basepath='meiyue/'
mkdir -p $basepath

mysqldump -uroot -p0129 --databases $dbname > $basepath$dbname-$(date +%Y%m%d).sql
    
# 将生成的SQL文件压缩
tar zPcf $basepath$dbname-$(date +%Y%m%d).sql.tar.gz $basepath$dbname-$(date +%Y%m%d).sql
    
# 删除7天之前的备份数据
find $basepath -mtime +7 -name "*.sql.tar.gz" -exec rm -rf {} \;

# 删除生成的SQL文件
rm -rf $basepath/*.sql