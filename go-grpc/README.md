### 环境和步骤
1. brew install protobuf：安装protoc命令 【想办法搞个这个编译器】
2. go get -u github.com/golang/protobuf【或者想办法把这个git clone下来】
3. cd github.com/golang/protobuf/protoc-gen-go && go build 【如果还不行，把protoc-gen-go 放到bin目录下】

### 步骤
1. 
```
// 命令行执行
protoc --proto_path=/Users/bugfan/Desktop/go-proj/src/github.com/bugfan/mytools/go-grpc/proto_file --go_out=./ /Users/bugfan/Desktop/go-proj/src/github.com/bugfan/mytools/go-grpc/proto_file/rpc.proto 
```
2. 查看pbs目录下，已经生成文件了