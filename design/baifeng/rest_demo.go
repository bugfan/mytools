package common

import (
	"errors"
	"fmt"
	"net/http"
	"reflect"
	"time"

	"github.com/ant0ine/go-json-rest/rest"
	"github.com/gogap/logrus"
)

type Handler interface {
	MakeBody() interface{} // must return a pointer
	CheckBody(body interface{}) error
	FuckBody(body interface{}) (result interface{}, err error)
	BodyString(body interface{}) string
	ResultString(result interface{}) string

	InitHandler(w rest.ResponseWriter, r *rest.Request)
	Env() map[string]interface{}
}

type Result struct {
	Status interface{} `json:"status"`
	Data   interface{} `json:"data,omitempty"`
	Msg    string      `json:"msg,omitempty"`
}

type List struct {
	Offset interface{} `json:"offset"`
	List   interface{} `json:"list"`
}

// =================================================================================
type HandlerDemo struct {
	writer  rest.ResponseWriter
	request *rest.Request
}

func (self *HandlerDemo) FuckBody(body interface{}) (result interface{}, err error) {

	obj := *body.(*map[string]interface{})

	return Result{
		Status: 200,
		Data:   obj,
		Msg:    "ok",
	}, nil
}

func (self *HandlerDemo) MakeBody() interface{} {
	obj := make(map[string]interface{}, 20)
	return &obj
}

func (self *HandlerDemo) CheckBody(body interface{}) error {
	/*obj := *body.(*map[string]interface{})
	if err := HasValues(obj, "hello"); err != nil {
		return err
	}*/
	return nil
}

func (self *HandlerDemo) BodyString(body interface{}) string {
	return fmt.Sprintf("%+v", body)
}

func (self *HandlerDemo) ResultString(result interface{}) string {
	return fmt.Sprintf("%+v", result)
}

func (self *HandlerDemo) InitHandler(w rest.ResponseWriter, r *rest.Request) {
	self.writer = w
	self.request = r
}

func (self *HandlerDemo) Env() map[string]interface{} {
	return self.request.Env
}

func (self *HandlerDemo) Debug(format string, params ...interface{}) {
	logrus.Debugf("[%s] debug: %v", self.request.URL.Path, fmt.Sprintf(format, params...))
}

func (self *HandlerDemo) Error(format string, params ...interface{}) {
	logrus.Errorf("[%s] error: %v", self.request.URL.Path, fmt.Sprintf(format, params...))
}

func (self *HandlerDemo) Info(format string, params ...interface{}) {
	logrus.Infof("[%s] info: %v", self.request.URL.Path, fmt.Sprintf(format, params...))
}

func HasValue(data map[string]interface{}, key string) error {
	if _, exist := data[key]; exist {
		return nil
	}
	return errors.New(fmt.Sprintf("缺少参数[%s]", key))
}

func HasValues(data map[string]interface{}, keys ...string) error {
	for _, v := range keys {
		err := HasValue(data, v)
		if err != nil {
			return err
		}
	}
	return nil
}

func common_handler(w rest.ResponseWriter, r *rest.Request, h Handler) {

	// 动态创建相同类型实例
	reflectVal := reflect.ValueOf(h)
	t := reflect.Indirect(reflectVal).Type()
	newObj := reflect.New(t)
	handler, ok := newObj.Interface().(Handler)

	if !ok {
		w.WriteJson(Result{Status: http.StatusInternalServerError, Msg: fmt.Sprintf("%s: handler类型转换失败", r.URL.Path)})
		return
	}

	logrus.Infof("<<<<<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<<")
	defer logrus.Infof("<<<<<<<<<<<<<<<<<< End <<<<<<<<<<<<<<<<<<")

	logrus.Infof("[%v] status: %+v", r.URL.Path, r.Env)
	handler.InitHandler(w, r)

	// 记录开始时间
	start := time.Now()

	data := handler.MakeBody()
	if data == nil {
		data = &map[string]interface{}{}
	} else {
		if err := r.DecodeJsonPayload(data); err != nil {
			logrus.Infof("[参数] error: %v", err.Error())
			w.WriteJson(Result{Status: http.StatusInternalServerError, Msg: err.Error()})
			return
		}
	}

	logrus.Infof("[%s] in: %v", r.URL.Path, handler.BodyString(data))

	err := handler.CheckBody(data)
	if err != nil {
		logrus.Infof("[检查] error: %v", err.Error())
		w.WriteJson(Result{Status: http.StatusInternalServerError, Msg: err.Error()})
		return
	}

	// 记录执行检查参数后的时间
	middle := time.Now()
	check := middle.Sub(start)

	result, err := handler.FuckBody(data)
	if err != nil {
		logrus.Infof("[处理] error: %v", err.Error())
		w.WriteJson(Result{Status: http.StatusInternalServerError, Msg: err.Error()})
		return
	}
	logrus.Infof("[%s] out: %+v", r.URL.Path, handler.ResultString(result))

	// 记录逻辑执行后的时间
	end := time.Now()
	elapsed := end.Sub(middle)

	check_ms := check.Nanoseconds() / 1e6
	elapsed_ms := elapsed.Nanoseconds() / 1e6
	runtime := check_ms + elapsed_ms

	// 打印运行效率
	logrus.Infof("[%s] run time: Check: %vms, Fuck: %vms", r.URL.Path, check_ms, elapsed_ms)
	w.WriteJson(result)

	if runtime >= slow_query_time && slow_query_handler != nil {
		go func() {
			slow_query_handler(r.URL.Path, runtime, check_ms, elapsed_ms)
		}()
	}
}

func MakeHandler(h Handler) rest.HandlerFunc {
	return func(w rest.ResponseWriter, r *rest.Request) {
		common_handler(w, r, h)
	}
}

type SlowQueryHandler func(pathurl string, runtime int64, param ...interface{})

var (
	slow_query_time    int64            = 200
	slow_query_handler SlowQueryHandler = nil
)

func SetSlowQueryTime(v int64) {
	slow_query_time = v
}

func SetSlowQueryHandler(f SlowQueryHandler) {
	slow_query_handler = f
}
