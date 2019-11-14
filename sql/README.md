## sql

## sql 分类
1. DDL 数据定义语言　类似insert update 那些定义
2. TPL　事务处理语言 
3. DCL 数据控制语言 类似于那些权限管理的控制ｓｑｌ
4. DML 数据操作语言 那些增删改查 

## join
1. inner
2. full outer
3. left outer
4. right outer
5. cross

### inner join 案例
1.`select <column> from tableA A inner join tableB B on A.key = B.key` 两个表的交集

### left outer join 案例
1. 左内连接取出的是左边表的，左表全部 `select <column> from tableA A left join tableB B on A.Key = B.Key`
2. 左内连接取出的是左边表的，左表部分 `select <column> from tableA A left join tableB B on A.Key = B.Key where B.key is NULL`
3. `not in `不适用索引，所以条件不要用not in

### right  outer join 案例　
1. 和left outer join一样，就是拿出来的是右边的

### full join 案例　
1. 取出的是两表的,全部 `select <column> from tableA A full join tableB B on A.Key = B.Key`
2. 取出的是两表的，自己部分的，不冲突的部分 `select <column> from tableA A full join tableB B on A.Key = B.Key where A.key is NULL or B.key is NULL`
3. 但是其实ｍｙｓｑｌ没有这个`full join`,可以使用`union all`链接起来left 和right的结果

### cross join 案例　(笛卡尔积 结果为m*n)
1. `select <column> from tableA A cross join tableB B`

### join update 案例　
1 把Ａ表的某个字段，在Ｂ表里面也有，更新他的另外一个字段值 `update tableA A join (select B.key from tableA A join tableB B on A.key = B.key) B on A.key = B.key  set A.Over="齐天大圣"`