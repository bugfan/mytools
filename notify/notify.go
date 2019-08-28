package notify

import (
	"errors"
	"fmt"

	"github.com/sirupsen/logrus"
)

const (
	TypeSMS = 1 << iota
	TypeEmail
	TypeWechat
	TypePhone
)

var AbilityName = map[int]string{
	TypeSMS:    "sms",
	TypeEmail:  "email",
	TypeWechat: "wechat",
	TypePhone:  "phone",
}

var providers = make(map[string]Provider)

func Register(p Provider) {
	providers[p.Name()] = p
}

type Status struct {
	Error   string
	Deposit string
}

type Provider interface {
	Name() string
	Ability() int
	Send(int, string, string, map[string]string) error
	Status() *Status
}

func Notify(t int, receiver, template string, data map[string]string) error {
	for name, p := range providers {
		if p.Ability()&t != 0 {
			logrus.Debugf("try notify using %s", name)
			err := p.Send(t, receiver, template, data)
			if err == nil {
				logrus.Debugf("notify using %s success", name)
				return nil
			}
			logrus.Debugf("notify using %s fail %s", name, err.Error())
			fmt.Printf("notify using %s fail %s\n", name, err.Error())
		}
	}
	return errors.New("no provider can process this notify")
}

func SMS(receiver, template string, data map[string]string) error {
	return Notify(TypeSMS, receiver, template, data)
}

func SMSCode(receiver, code string) error {
	return Notify(TypeSMS, receiver, "code", map[string]string{
		"code": code,
	})
}

func SMSLoadbalanceNotify(receiver, msg string) error {
	return Notify(TypeSMS, receiver, "loadbalance", map[string]string{
		"msg": msg,
	})
}
