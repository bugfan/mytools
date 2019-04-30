# useage 
1. 首先你去在机器上面装好go-bindata环境
    ` go get -u github.com/jteeuwen/go-bindata/... `
    ` go install `

2. 执行命令将资源代码打包成go文件
    ` go-bindata -pkg main -o dst.go [目录或者文件] `

3. 最后在你指定的目录生成det.go -pkg指定包名