##  mgo 优化日志

###  access_log
db.access_log.getIndexes()
db.access_log.createIndex({"tags.server_id":1})
db.access_log.createIndex({"tags.server_id":1,starttime:1})
db.access_log.createIndex({starttime:1,"tags.server_id":1})
db.access_log.createIndex({ip:1,starttime:1})
db.access_log.createIndex({starttime:1,"tags.server_name":1})

db.access_log.createIndex({date:1})
db.access_log.createIndex({date:1,"response.status":1})
db.access_log.createIndex({"tags.server_id":1,"response.status":1})
db.access_log.createIndex({"response.status":1})
db.access_log.createIndex({"tags.server_name":1})
db.access_log.createIndex({"tags.server_id":1,starttime:1,endtime:1})
db.access_log.createIndex({ip:1,starttime:1,endtime:1})
db.access_log.createIndex({ip:1})
db.access_log.createIndex({"response.status":1})
db.access_log.createIndex({"response.status":1,date:1})
db.metric_server.createIndex({started_at:1})
db.metric_loads.createIndex({started_at:1})
db.metric_loads.createIndex({created_at:1})
db.metric_mems.createIndex({created_at_at:1})
db.metric_storage.createIndex({created_at:1})
db.metric_io.createIndex({created_at:1})

### 结果　
> db.access_log.getIndexes()
[
	{
		"v" : 2,
		"key" : {
			"_id" : 1
		},
		"name" : "_id_",
		"ns" : "sengine.access_log"
	},
	{
		"v" : 2,
		"key" : {
			"starttime" : 1
		},
		"name" : "starttime_1",
		"ns" : "sengine.access_log"
	},
	{
		"v" : 2,
		"key" : {
			"starttime" : 1,
			"endtime" : 1
		},
		"name" : "starttime_1_endtime_1",
		"ns" : "sengine.access_log"
	},
	{
		"v" : 2,
		"key" : {
			"tags.server_id" : 1
		},
		"name" : "tags.server_id_1",
		"ns" : "sengine.access_log"
	},
	{
		"v" : 2,
		"key" : {
			"tags.server_id" : 1,
			"starttime" : 1
		},
		"name" : "tags.server_id_1_starttime_1",
		"ns" : "sengine.access_log"
	},
	{
		"v" : 2,
		"key" : {
			"starttime" : 1,
			"tags.server_id" : 1
		},
		"name" : "starttime_1_tags.server_id_1",
		"ns" : "sengine.access_log"
	},
	{
		"v" : 2,
		"key" : {
			"ip" : 1,
			"starttime" : 1
		},
		"name" : "ip_1_starttime_1",
		"ns" : "sengine.access_log"
	},
	{
		"v" : 2,
		"key" : {
			"starttime" : 1,
			"tags.server_name" : 1
		},
		"name" : "starttime_1_tags.server_name_1",
		"ns" : "sengine.access_log"
	},
	{
		"v" : 2,
		"key" : {
			"date" : 1
		},
		"name" : "date_1",
		"ns" : "sengine.access_log"
	},
	{
		"v" : 2,
		"key" : {
			"date" : 1,
			"response.status" : 1
		},
		"name" : "date_1_response.status_1",
		"ns" : "sengine.access_log"
	},
	{
		"v" : 2,
		"key" : {
			"tags.server_id" : 1,
			"response.status" : 1
		},
		"name" : "tags.server_id_1_response.status_1",
		"ns" : "sengine.access_log"
	},
	{
		"v" : 2,
		"key" : {
			"response.status" : 1
		},
		"name" : "response.status_1",
		"ns" : "sengine.access_log"
	},
	{
		"v" : 2,
		"key" : {
			"tags.server_name" : 1
		},
		"name" : "tags.server_name_1",
		"ns" : "sengine.access_log"
	},
	{
		"v" : 2,
		"key" : {
			"tags.server_id" : 1,
			"starttime" : 1,
			"endtime" : 1
		},
		"name" : "tags.server_id_1_starttime_1_endtime_1",
		"ns" : "sengine.access_log"
	},
	{
		"v" : 2,
		"key" : {
			"ip" : 1,
			"starttime" : 1,
			"endtime" : 1
		},
		"name" : "ip_1_starttime_1_endtime_1",
		"ns" : "sengine.access_log"
	},
	{
		"v" : 2,
		"key" : {
			"ip" : 1
		},
		"name" : "ip_1",
		"ns" : "sengine.access_log"
	},
	{
		"v" : 2,
		"key" : {
			"response.status" : 1,
			"date" : 1
		},
		"name" : "response.status_1_date_1",
		"ns" : "sengine.access_log"
	}
]
