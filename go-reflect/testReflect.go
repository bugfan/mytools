package main

import (
	"log"
	"reflect"
	"strings"
)

///--------------场景1用到的机构体和接口-----------------------
type Handler1 interface {
	Fuck() string
}
type Pig struct {
	Name string
}

func (*Pig) Fuck() string {
	return "pig fuck ..."
}

///--------------场景2用到的机构体和接口-----------------------
type Mooncake1 struct {
	Size  int
	Name  string
	Price float64
	from  string
}

func (*Mooncake1) Make() string {
	return "use Mooncake1's batching"
}

type Mooncake2 struct {
	Size  int
	Name  string
	Price float64
	from  string
}

func (*Mooncake2) Make() string {
	return "use Mooncake2's batching"
}

func main() {
	// 场景1
	// 接受采用interface收，并把interface通过反射拿到实现了某个接口的函数
	test1 := &Pig{}
	reflectVal := reflect.ValueOf(test1)
	t := reflectVal.Interface().(Handler1)
	log.Println("结果:", t.Fuck())

	// 场景2
	// 写web框架的时候，会用到很多设计模式，有一种叫委托或者策略 其中要利用反射来转化成你要的model
	// 这里用到一个copyFields函数，可以拷贝一个对象的属性和方法的数据到另外一个对象中
	m1 := &Mooncake1{
		Size:  12,
		Name:  "稻香村月饼",
		Price: 14,
		from:  "稻香村糕点店",
	}
	m2 := &Mooncake2{
		Size:  8,
		Name:  "农家自烙月饼",
		Price: 2.5,
		from:  "农家月饼生产线",
	}
	log.Println("拷贝之前的数据:m1 %v ,m2 %v", m1, m2)
	err := copyFields(m1, m2, []string{})
	log.Println("拷贝结果:", err)
	log.Println("拷贝之后的数据:m1 %v ,m2 %v", m1, m2)
}

func copyFields(to interface{}, from interface{}, excepts []string) error {
	toVal := reflect.ValueOf(to)
	if toVal.Kind() == reflect.Ptr {
		toVal = toVal.Elem()
	}
	fromVal := reflect.ValueOf(from)
	if fromVal.Kind() == reflect.Ptr {
		fromVal = fromVal.Elem()
	}
	// to fileld
	toType := toVal.Type()
	fieldNum := toType.NumField()
	for i := 0; i < fieldNum; i++ {
		toField := toType.Field(i)
		if excepts != nil && hasItem(toField.Name, excepts) {
			continue
		}
		toValField := toVal.Field(i)
		if !toValField.CanSet() {
			continue
		}
		if fromValField := fromVal.FieldByName(toField.Name); fromValField.IsValid() && fromValField.Type() == toValField.Type() {
			toValField.Set(fromValField)
			continue
		}
		if fromFunc := fromVal.Addr().MethodByName(toField.Name); fromFunc.IsValid() &&
			fromFunc.Type().NumOut() >= 1 &&
			fromFunc.Type().Out(0) == toValField.Type() &&
			fromFunc.Type().NumIn() == 0 {
			res := fromFunc.Call(make([]reflect.Value, 0))
			if len(res) > 1 {
				last := res[len(res)-1]
				if last.CanInterface() && !last.IsNil() {
					if err, ok := last.Interface().(error); ok {
						return err
					}
				}

			}
			toValField.Set(res[0])
			continue
		}
	}
	// to func

	toVal = toVal.Addr()
	toType = toVal.Type()
	funcNum := toType.NumMethod()
	for i := 0; i < funcNum; i++ {
		// method from type
		toMethod := toType.Method(i)
		if !strings.HasPrefix(toMethod.Name, "Set") {
			// only SetXXX methods
			continue
		}

		name := strings.TrimPrefix(toMethod.Name, "Set")
		// skip excepts
		if excepts != nil && hasItem(name, excepts) {
			continue
		}

		// func from value
		toFunc := toVal.MethodByName(toMethod.Name)
		argType := toFunc.Type().In(0)

		// from field
		if fromValField := fromVal.FieldByName(name); fromValField.IsValid() && fromValField.Type() == argType {
			res := toFunc.Call([]reflect.Value{fromValField})
			if len(res) > 0 {
				last := res[len(res)-1]
				if last.CanInterface() && !last.IsNil() {
					if err, ok := last.Interface().(error); ok {
						return err
					}
				}

			}
			continue
		}
		// from func

		if fromFunc := fromVal.Addr().MethodByName(name); fromFunc.IsValid() &&
			fromFunc.Type().NumOut() >= 1 &&
			fromFunc.Type().Out(0) == argType &&
			fromFunc.Type().NumIn() == 0 {
			res := fromFunc.Call(make([]reflect.Value, 0))
			if len(res) > 1 {
				last := res[len(res)-1]

				if last.CanInterface() && !last.IsNil() {
					if err, ok := last.Interface().(error); ok {
						return err
					}
				}

			}

			res = toFunc.Call([]reflect.Value{res[0]})
			if len(res) > 0 {
				last := res[len(res)-1]
				if last.CanInterface() && !last.IsNil() {
					if err, ok := last.Interface().(error); ok {
						return err
					}
				}

			}
			continue
		}

	}
	return nil
}

func hasItem(a string, list []string) bool {
	for _, b := range list {
		if b == a {
			return true
		}
	}
	return false
}
