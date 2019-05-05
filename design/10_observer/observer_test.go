package observer

import "testing"

func TestObserver(t *testing.T) {
	a := &A{Name: "aaaaa"}
	b := &B{Age: 23}
	subject := &Subject{}
	subject.Append(b, a)
	subject.Notify("observer mode:")
}
