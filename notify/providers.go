package notify

import (
	"errors"
	"fmt"

	"regexp"

	resty "gopkg.in/resty.v1"
)

func RegisterLuosimao(smskey, phonekey, sign string) {
	p := &luosimao{
		smskey:   smskey,
		phonekey: phonekey,
		sign:     sign,
	}
	Register(p)
}

type luosimao struct {
	smskey   string
	phonekey string
	sign     string
}

func (luosimao) Name() string {
	return "luosimao"
}

func (p luosimao) Ability() int {
	var res int
	if p.smskey != "" {
		res |= TypeSMS
	}
	if p.phonekey != "" {
		res |= TypePhone
	}
	return res
}
func (p luosimao) Send(t int, receiver, template string, data map[string]string) error {
	switch {
	case t&TypeSMS != 0:
		return p.sms(receiver, template, data)
	case t&TypePhone != 0:
		return p.phone(receiver, template, data)
	default:
		return fmt.Errorf("%s has no ability for %s", p.Name(), AbilityName[t])
	}
}

type result struct {
	Error   int    `json:"error"`
	Msg     string `json:"msg"`
	BatchID string `json:"batch_id"`
	Hit     string `json:"hit"`
}

func (p luosimao) sms(receiver, template string, data map[string]string) error {
	url := "https://sms-api.luosimao.com/v1/send.json"
	message, err := Render(template, data)
	if err != nil {
		return err
	}
	resp, err := resty.R().
		SetBasicAuth("api", fmt.Sprintf("key-%s", p.smskey)).
		SetFormData(map[string]string{
			"mobile":  receiver,
			"message": fmt.Sprintf("%s 【%s】", message, p.sign),
		}).
		SetResult(&result{}).
		Post(url)
	if err != nil {
		return err
	}
	res := resp.Result().(*result)
	if res.Error != 0 {
		return fmt.Errorf("error: %d, %s", res.Error, res.Msg)
	}
	return nil
}

var codeRe = regexp.MustCompile("^[0-9]{4,6}$")

func (p luosimao) phone(receiver, template string, data map[string]string) error {
	if template != "code" || data["code"] == "" || !codeRe.Match([]byte(data["code"])) {
		return errors.New("luosimao only support send code by phone")
	}

	url := "https://sms-api.luosimao.com/v1/verify.json"
	resp, err := resty.R().
		SetBasicAuth("api", fmt.Sprintf("key-%s", p.phonekey)).
		SetFormData(map[string]string{
			"mobile": receiver,
			"code":   data["code"],
		}).
		SetResult(&result{}).
		Post(url)
	if err != nil {
		return err
	}
	res := resp.Result().(*result)
	if res.Error != 0 {
		return fmt.Errorf("error: %d, %s", res.Error, res.Msg)
	}
	return nil

}

func (luosimao) Status() *Status {
	return &Status{}

}
