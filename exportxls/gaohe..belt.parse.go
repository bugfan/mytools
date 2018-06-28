package main 

import (
	"log"
	"io/ioutil"
	"strings"
	"encoding/json"
	"fmt"
	"github.com/Luxurioust/excelize"
	// "github.com/bugfan/to"
	"strconv"
)

func main(){
	// ioutil.ReadFile("./belt.xlsx")
	xlsx, err := excelize.OpenFile("./belt.xlsx")
	if err != nil {
		fmt.Println(err)
		return
	}
	// cell := xlsx.GetCellValue("Sheet1", "B2")
    // fmt.Println(cell)
    // Get sheet index.
    index := xlsx.GetSheetIndex("Sheet1")
    // Get all the rows in a sheet.
	rows := xlsx.GetRows("sheet" + strconv.Itoa(index))
	end:=":554/h264/ch1/main/av_stream"
	objs:=make([]*JB,0,10)
    for _, row := range rows {
		obj:=JB{}
		flg:=true
        for k, colCell := range row {
			// if k==0 && to.Int64(colCell)!=0{
			// 	break
			// }
			// fmt.Print(colCell, "\t")	
			if k==1{
				obj.Type=colCell
			}else if k==4{
				obj.Mac=colCell
			}else if k==5{
				obj.Position=colCell
			}else if k==6{
				obj.Desc=colCell
				if colCell=="备注"{
					flg=false
				}
			}else if k==2{
				us:=strings.Split(row[3],`/`)
				pre:="rtsp://"
				if len(us)>1{
					obj.Stream=pre+us[0]+":"+us[1]+"@"+colCell+end
				}else{
					obj.Stream=pre+"@"+colCell+end
					flg=false		//说是无密码不能用
				}
				if colCell==""{
					flg=false
				}
			}
		}
		if flg{
		objs=append(objs,&obj)
		}
        // fmt.Println()
	}
	bs,err:=json.Marshal(objs)
	fmt.Println(err,string(bs))
	log.Println(ioutil.WriteFile("./rtsp.json",bs,755))
}
type JB struct{
	Stream string
	Type string
	Mac string
	Position string
	Desc string
}
// 以下是使用文档，可以参考，但是github作者后期好像更改了源码，可以使用本bugfan本地git下来的代码
// https://studygolang.com/articles/9811
			}else if k==5{
