## golang channel 应用 
### 场景
1. 超时一定时间，清除缓存或者清除队列消息，并发送出去
2. 缓存或者队列消息满了之后，主动发送消息

###  代码
```
const (
	restBufferSize = 10 // 缓冲区大小
	restTimeout    = 3  // 最多3秒延时
)

var (
	restLen                = 0
	restButton             = false
	restIntervalTime int64 = 0
	once             *sync.Once
	in               chan struct{}
	after            <-chan time.Time
)

func init() {
	once = &sync.Once{}
	in = make(chan struct{}, 1)
	after = make(chan time.Time)
}

func Pushbutton(v ...bool) bool {
	if len(v) < 1 {
		return restButton
	}
	restButton = v[0]
	return restButton
}
func PushState() int64 {
	restIntervalTime = time.Now().Unix()
	return restIntervalTime
}

func (l *accessLogger) pushData(elem *logger.LoggingElem) {
	// 如果没有打开开关 或者vue定时器时间比当前时间慢固定时间就不推送了
	if !restButton || (time.Now().Unix()-restIntervalTime) > 15 {
		return
	}
	l.pushPipe(elem)
}

func (l *accessLogger) pushPipe(elem *logger.LoggingElem) {
	l.restElems = append(l.restElems, elem)
	in <- struct{}{}
	after = time.After(time.Second * restTimeout)
	once.Do(func() {
		for {
			select {
			case <-after:
				l.push()
			case <-in:
				restLen++
				if restLen < restBufferSize {
					break
				}
				restLen = 0
				l.push()
			}
		}
	})
}

func (l *accessLogger) push() {
	o := make(map[string]interface{}, 0)
	o["Data"] = l.restElems
	event.Restf("RUNTIME_LOG", o)
	l.restElems = l.restElems[:0]
}

```
