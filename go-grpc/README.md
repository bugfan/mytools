### 环境和步骤
1. brew install protobuf：安装protoc命令
2. go get -u github.com/golang/protobuf
3. cd github.com/golang/protobuf/protoc-gen-go && go build 【如果还不行，把protoc-gen-go 放到bin目录下】

### 步骤
1. 
```
// 命令行执行
protoc --proto_path=/Users/bugfan/Desktop/go-proj/src/github.com/bugfan/mytools/go-grpc/go_protoc --go_out=./ /Users/bugfan/Desktop/go-proj/src/github.com/bugfan/mytools/go-grpc/go_protoc/rpc.proto 
```
2. 查看pbs目录下，已经生成文件了