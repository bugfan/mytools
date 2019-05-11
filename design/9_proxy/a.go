package proxy

type Handle interface {
	Fuck() string
}

type Real struct {
}

func (*Real) Do() string {
	return "fuck"
}

func NewTool() *tool {
	return &tool{
		real: &Real{},
	}
}

type tool struct {
	real *Real
}

// 反正我所有的工作只需要调用Do方法就行了，不管他里面发神了设么
func (s *tool) Fuck() string {
	a := "strat:"
	a += s.real.Do()
	a += ":end"
	return a
}
