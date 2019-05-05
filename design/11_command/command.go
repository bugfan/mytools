package command

import "log"

type Box struct {
	Cmd1 Command
	Cmd2 Command
}

// 接受并使用命令的地方直接调用此方法，执行里面定义好的CMD1 CMD2即可
func NewBox(a, b Command) *Box {
	return &Box{
		Cmd1: a,
		Cmd2: b,
	}
}

// 调用命令，具体实现我不关注
func (b *Box) CMD1() {
	b.Cmd1.Do()
}

func (b *Box) CMD2() {
	b.Cmd2.Do()
}

type Command interface {
	Do()
}

// 定义两组对象，他们直接存在互相调用，但是具体哪个调用代表哪个可以自己在传入时候指定
type ShutDownCommand struct {
}

func (*ShutDownCommand) Do() {
	log.Println("want shutdown ")
}

func NewShutDownCommand() *ShutDownCommand {
	return &ShutDownCommand{}
}

type RebootCommand struct {
}

func (*RebootCommand) Do() {
	log.Println("want reboot ")
}

func NewRebootCommand() *RebootCommand {
	return &RebootCommand{}
}
