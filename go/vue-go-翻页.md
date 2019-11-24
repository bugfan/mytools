## vue golang mongo mysql 翻页

### 前端
1. api部分 (request直接调用封装好的axios)
```
 defense_ip(level, offset, limit) {
    return request({
      url: '/syslog/defense_ip?level=' + level + '&offset=' + offset + '&limit=' + limit,
      method: 'get'
    })
  },
```
2. vue调用api部分 
```
  defense_list() {
        return apid.fetchd(this.choosed, 1, 10, this.server).then(response => {
          if (!response.data.data) {
            this.listd = []
          } else {
            for (let i = 0; i < response.data.data.length || i < 5; i++) {
              if (response.data.data[i]) {
                this.listd.push(response.data.data[i])
              }
            }
          }
          this.listLoading = false
        })
      },
```
### 后端
1. mysql
```
// 登录日志
func AdminLoginList(current, pagesize int) (interface{}, int64, error) {
	user := &AdminLogin{}
	total, err := GetEngine().Where("id >?", 0).Count(user)
	var allusers []AdminLogin
	err = GetEngine().Desc("id").Limit(pagesize, (current-1)*pagesize).Find(&allusers)
	return allusers, total, err
}
```

2. mongo
```
// 防御事件查询
func EventWarnList(level string, page, limit, serverID int) (data []*EventLog, total int, err error) {
	session := GetSession()
	defer session.Close()
	var query bson.M
	if serverID == 0 {
		query = bson.M{
			"level": level,
		}
	} else {
		query = bson.M{
			"level":         level,
			"tags.serverID": to.String(serverID),
		}
	}

	total, err = session.DB("sengine").C("event_log").Find(query).Count()
	if err != nil {
		return nil, 0, err
	}
	err = session.DB("sengine").C("event_log").Find(query).Sort("-_id").Skip((page - 1) * limit).Limit(limit).All(&data)
	if err != nil {
		return nil, 0, err
	}
	return data, total, nil
}

```