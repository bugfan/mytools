package main

import "log"

func main() {
	data, err := Asset("data/test.js")
	log.Println("js:", err, string(data))

	data, err = Asset("data/test.txt") //找某个文件
	log.Println("txt:", err, string(data))

	dataArray, err := AssetDir("data") //找目录下的文件
	log.Println("dir:", err, dataArray)

	names := AssetNames() //找目录下的所有文件名[完整路径]
	log.Println("names:", names)

}
