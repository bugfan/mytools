package main
import(
	"log"
	"github.com/nsqio/go-nsq"
	"fmt"
)

// nsq订阅消息
type ConsumerT struct{}

func (*ConsumerT) HandleMessage(msg *nsq.Message) error {
    log.Println(string(msg.Body))
    return nil 
}
var C *nsq.Consumer
func main() {
	var err error
    C, err = nsq.NewConsumer("wuyang.tisheng.opc.data.effect", "data-channel-effect.wuyang.tisheng.opc.backend-uuu", nsq.NewConfig())   // 新建一个消费者
    if err != nil {
        log.Println(err)
	}   
	C.AddHandler(nsq.HandlerFunc(func(m *nsq.Message) error {
		fmt.Printf("[%s] %s: %s\n", m.NSQDAddress, m.Body)
		m.Finish()
		return nil
	}))                                           // 添加消息处理
	if err := C.ConnectToNSQD("172.10.11.201:41530"); err != nil {            // 建立连接
		log.Println(err)
	}
	<-(chan int)(nil)
}
