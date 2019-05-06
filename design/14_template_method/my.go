package my

import "log"

type cook interface {
	Cook()
}
type myTemplate struct {
	template
}
type template interface {
	cut()
	cook()
}

func newMyTemplate(impl template) *myTemplate {
	return &myTemplate{
		template: impl,
	}
}

// handler
func (s *myTemplate) Cook() {
	s.cut()
	s.cook()
}

type chefLiu struct {
	*myTemplate
}

func NewChefLiu() cook {
	o := &chefLiu{}
	t := newMyTemplate(o)
	o.myTemplate = t
	return o
}
func (*chefLiu) wash() {
	log.Println("chefliu wash!")
}
func (*chefLiu) cut() {
	log.Println("chefliu cut!")
}
func (*chefLiu) cook() {
	log.Println("chefliu cook!")
}

type chefZhang struct {
	*myTemplate
}

func NewChefZhang() cook {
	o := &chefZhang{}
	t := newMyTemplate(o)
	o.myTemplate = t
	return o
}
func (*chefZhang) cut() {
	log.Println("chefZhang cut!")
}
func (*chefZhang) cook() {
	log.Println("chefZhang cook!")
}
