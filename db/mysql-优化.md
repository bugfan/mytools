### mysql优化条目
#### sql和索引优化
1. 发现有问题sql，打开慢查询进行监控
2. 辅助工具，pt-query-digest
3. 通过explain分析sql执行计划
##### 查询细节
1. count(*)和count(字段名)之间的区别，*包括NULL条目
2. count(字段=某条件)
3. 子查询(创建临时表)改成join查询时候，注意有数据重复问题，需要distinct
4. order by,使用排序时候，排序字段改用索引的字段
5. 多条件索引，看这几个的离散率谁的高，谁放在前面。也就是说那个条件能过滤掉尽可能多的数据。
6. pt-duplicate-key-checker检查冗余索引
7. group by,创建临时表

#### 表结构优化
1. 使用int存储时间，使用内置函数进行转换是最好的效果
2. 使用bigint来存ip，使用内置函数转换
3. 范式化(主要是分表)和反范式化(尽可能减少关联)
4. 垂直拆分：
  1. 大字段放一起
  2. 不常用放在一起
5. 水平拆分

#### 配置优化
1. 调整tcp参数配置，连接数之类的
2. 打开表文件数，默认1024 
3. 使用命令
```
ulimit -a
```
4. 关闭软件防火墙，节省性能
5. 查找mysql系统默认配置文件
```
 mysqld --verbose --help |grep -A 1 'Default options'
```
6. innodb_buffer_pool_size,配置innodb缓冲池,如果都是innodb表，那设置为大于系统内存的75%
7. innodb_buffer_pool_instances,配置缓冲池的个数，默认是一个
8. innodb_log_buffer_size,log缓冲大小
9. innodb_flush_log_at_trx_commit,默认是1，建议2
10. innodb_read_io_threads,innodb_write_io_threads，读写的线程数，5.5之后可以根据核心来调整
11. innodb_file_per_table,关键参数，控制innodb表每个表使用独立的表空间，默认是off，打开之后，回收快，增加读写效率，off是共享一个表空间的
12. 最后可以使用那种网页的配置向导，进行配置

#### 硬件
1. mysql主机核心数不一定事越多越好，5.5版本之后超过32核心反而降低
2. 有些操作只用到了单核cpu
3. REID1+EAID0，效果最好了

