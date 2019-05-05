package command

import "testing"

func TestCommand(t *testing.T) {
	a := NewShutDownCommand()
	b := NewRebootCommand()

	box := NewBox(a, b)
	box.CMD1()
	box.CMD2()

	box2 := NewBox(b, a)
	box2.CMD1()
	box2.CMD2()

	// output
	//2019/05/05 17:33:24 want shutdown
	// 2019/05/05 17:33:24 want reboot
	// 2019/05/05 17:33:24 want reboot
	// 2019/05/05 17:33:24 want shutdown
	// PASS
	// ok      mytools/design/11_command       0.002s
}
