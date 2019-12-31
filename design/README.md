## 我们通常开发go程序时候会遇到 包循环引用

### 解决办法
1. 第一就是我们设计好包，分类存放，能减少一定的问题

2. 如果到了需要互相引用包的时候，不可避免的时候，我们就需要使用“Listener”这种机制了，如下：
 
 A包要用B包，B包也要用A包的代码，首先你保留一个单向的引用，另外 反向在用的时候，就在之前单向的时候调用一些api，把回调函数发到B包，让B包在合适 的时间，调用
 即可
 ```
 // 例如在B包写这些代码
 type RestListener func(map[string]interface{})

var restListeners []RestListener

func RegisterRestListener(l RestListener) {
	logrus.Debugf("register rest listener %#v\n", l)
	restListeners = append(restListeners, l)
}

 ```
 
 ```
 // 在A包的init开始代码时候添加一些监听：
 sEvent.RegisterRestListener(restBroadcast)
 func restBroadcast(obj map[string]interface{}) {
	msg, err := json.Marshal(obj)
	if err != nil {
		return
	}
	Broadcast(msg)
}
  
 ```
 
 这样 就可以互相调用了
