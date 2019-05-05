package observer

type Subject struct {
	Array   []Observer
	Context string
}

func (s *Subject) Append(obj ...Observer) {
	s.Array = append(s.Array, obj...)
}

func (s *Subject) notify() {
	for _, o := range s.Array {
		o.Do() //不必关心具体实现是A的Do还是B的Do
	}
}

func (s *Subject) Notify(context string) {
	s.Context = context
	s.notify()
}

type Observer interface {
	Do()
}

type A struct {
	Name string
}

func (s *A) Do() {
	println("打印我的A撒:", s.Name)
}

type B struct {
	Age int
}

func (s *B) Do() {
	println("打印我的B撒:", s.Age)
}
