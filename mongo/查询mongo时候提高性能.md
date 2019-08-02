## 最近在优化mongo查询的一些东西，刚开始建立索引，但是发现建立之后速度并没有明显的提升，只是在少部分需要聚合的ａｐｉ的时候快了些，

### 要知道，项目里面数据也就几十，几百G，加不加索引都是可以的，不影响

### 最后发现是后台api的写法有问题，今后想要提速需要一下几点：
1. 千万不要放在内存里面计算，特别费性能，而且你写的计算方式未必比人家mongo提供的好，原来是从mongo里面直接查询出时间段范围的数据（数据很多，只能进行处理之后再返回），然后在内存里面计算，因为记录太多了，全部展示在页面，吃不消，而且也不好看，现在改成了在mongo里面按照
一定的粒度计算好，然后由后端直接返回去，就不在后台用程序计算了，因为mongo提供了非常多的东西，例如管道，聚合，性能非常好，下面是案例:
```
func GetAccessLogsByDate(begin, end time.Time) ([]bson.M, error) {
	session := GetSession()
	defer session.Close()
	match := bson.M{
		"$match": bson.M{
			"starttime": bson.M{
				"$gt": begin,
				"$lt": end,
			},
		},
	}

	project := bson.M{
		"$project": bson.M{
			"time_s": bson.M{
				"$dateToString": bson.M{"format": "%Y-%m-%dT%H:00:00Z", "date": "$starttime"},
			},
			"size": "$size",
		},
	}
	group := bson.M{
		"$group": bson.M{
			"_id":   "$time_s",
			"count": bson.M{"$sum": 1},
			"sizes": bson.M{"$sum": "$size"},
		},
	}

	operations := []bson.M{match, project, group}
	results := []bson.M{}
	err := session.DB("sengine").C("access_log").Pipe(operations).All(&results)
	if err != nil {
		return nil, err
	}
	return results, nil
}
```

2. 或者在插入数据的时候就进行周期性的聚合，然后提前插入到其他的表，然后api再次查询的时候就直接从那个聚合之后的表查询，这样对于画曲线来说，很有利，
因为点数大大减少了，而且因为聚合了能画出正确的曲线

３．第三点是在网上看到的，听说的，那就是把全部数据从数据库查出来之后，直接返回，然后让前段去计算自己想要的值，这样服务器就没有负载了，只是转发，这样
也可以提高查询速度，和性能
