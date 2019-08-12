## 有时候我需要从mongo进行复杂计算，但是mongo还是没有sql好用哇 
### 此时我们可以写mapreduce 当然也可以写多次group进行计算
1. 就是说第二次group的的_id是第一次计算的结果的值，然后再进行count之类的,
### 参考链接 https://blog.csdn.net/lff0305/article/details/50034735
