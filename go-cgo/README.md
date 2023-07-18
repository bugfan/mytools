## 写C时候不方便的做的逻辑用golang实现一下
可以在里面实现httpserver,tlsserver,web-curd逻辑

### 编译共享库
go build -buildmode=c-shared -o add.so add.go

### 编译静态库
go build -buildmode=c-archive -o libadd.a add.go

### 编译c,调用库
gcc -o main main.c -ldl
./main
