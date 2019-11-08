
## vim介绍
1. vim = vi + IMproved
2. 通过网络协议　http/ssh编辑文件
3. 多文件编辑
4. 编辑压缩格式文集　gzip等

## vimrc介绍
1. rc = run command
2. 用户级别vimrc和系统级别vimrc
3. 每一行做一个命令来执行

## vim四中模式
1. 普通模式　按完esc那个状态
2. 可视模式　对一块区域编辑查看
3. 插入模式 文本输入
4. 命令模式 

## 光标移动　
1. h left ,l right,j down ,k up,^/0(字母０(有空格也到第一个)，或者shift6(知道非空格的首部))　移动到行首,$ 移动到尾巴
2. w/W 移动到下一个token　
3. b/B 移动到上一个token开头
4. e/E 移动到下一个token结尾

## 跳转
1. ctrl + f/F 下一页
2. ctrl + b/B 上一页
3. ctrl + d/u 向上/下翻半页
4. gg 跳转到文件首行
5. <lint number>gg/G 跳转到指定行 比如:`10gg`跳到第１０行
6. G 到最后一行　
7. {g} + (ctrl+g)/G　查看文件信息　，更加详细(可能是多多的那个追文件)　