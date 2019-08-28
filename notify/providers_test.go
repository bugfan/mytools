package notify

import (
	"fmt"
	"os"
	"testing"
)

func TestLuosimao(t *testing.T) {
	// err := Notify(TypeSMS, "xxxx", "code", map[string]string{
	// 	"code": "1234",
	// })
	// if err != nil {
	// 	t.Error(err)
	// }

	err := Notify(TypePhone, "xxxx", "code", map[string]string{
		"code": "1234",
	})
	if err != nil {
		t.Error(err)
	}
}

func TestMain(m *testing.M) {
	setup()
	ret := m.Run()
	if ret == 0 {
		teardown()
	}
	os.Exit(ret)
}

func setup() {
	err := RegisterTemplate(&Template{
		Name:     "code",
		Template: `您的验证码是：{{index .Data "code"}}`,
	})
	if err != nil {
		fmt.Println(err.Error())
		os.Exit(-1)
	}
	RegisterLuosimao("xxxx", "xxxx", "铁壳测试")
}

func teardown() {

}
