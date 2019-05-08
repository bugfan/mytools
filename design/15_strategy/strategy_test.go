package strategy

import "testing"

func TestStrategy(*testing.T) {
	// 2019.5.8
	// 今天写一个“策略模式”，这个模式第一听说的时候还是白枫告诉我的，一直很有神秘感，今天才感觉到挺有意思

	// 应用场景：传入固定的一些参数，然后由接收方实例化一个类，把这个类转为接口，最后调用方法;比如转账汇款，一般都是收款人，打款人，金额，方式这几部分构成

	// 实现思路： 就是定义一个中间的类，里面有交互的参数，有一个或者多个统一的方法，其他类也有要实现这个方法，因为有一个接口约束，new这个中间类的时候，
	// 根据参数实例化，并把传入的其他实例类也通过接口传给这个中间类，最后，调用的地方在调用的时候，通过参数把数据传给自己定义的统一方法中，在统一方法实现自己的逻辑

	alipay := NewPayment("zhangsan", "lisi", 45.6, &Alipay{})
	alipay.Pay()

	wechatpay := NewPayment("lisi", "zhangsan", 42, &WechatPay{})
	wechatpay.Pay()
}
