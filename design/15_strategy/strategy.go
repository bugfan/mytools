package strategy

import "log"

type Payment interface {
	Pay(*PaymentContext)
}

func NewPayment(from, to string, money float64, payment Payment) *PaymentContext {
	return &PaymentContext{
		From:    from,
		To:      to,
		payment: payment,
		Money:   money,
	}
}

type PaymentContext struct {
	From, To string
	Money    float64
	payment  Payment
}

func (s *PaymentContext) Pay() {
	s.payment.Pay(s)
}

type Alipay struct {
}

func (*Alipay) Pay(c *PaymentContext) {
	log.Println("Alipay :", c.From, c.To, c.Money)
}

type WechatPay struct {
}

func (*WechatPay) Pay(c *PaymentContext) {
	log.Println("WechatPay :", c.From, c.To, c.Money)
}
