# 今天突然yy想到了xorm的一些小坑，其他的也没啥了
## xorm里面改数据表记录的时候，需要选中字段
```
models.GetEngine().ID(serverID).Cols("certificate_id").Update(&server)
```

## xorm里面改数据全部记录的时候，一般其他框架是之际update这个对象就行了，但是xorm是改了时间，需要这样写，才能改全部字段
```
if _, err = sc.X.ID(id).AllCols().Update(&server); err != nil {
		_ = ctx.AbortWithError(http.StatusBadRequest, err)
		return
	}
  ```
  
  #最后给出xorm文档地址  http://gobook.io/read/github.com/go-xorm/manual-zh-CN/
