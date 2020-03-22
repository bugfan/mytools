### go代码调mgo api
```
        // WiredTiger模式
	result := bson.M{}
	err := GetSession().DB("sengine").Run(bson.D{{"compact", "access_log"}}, &result)
	if err != nil {
		logrus.Debug("clear accesslog in WiredTiger: %v\n", err)
	}
	return err
```
