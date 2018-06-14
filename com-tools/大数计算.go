packge com
const(
	HEX=10
)
func mul1010(s1,s2 string){
	log.Println("开始输出mul1010：")
	arr:=[]string{}
	bei:=0
	for i:=len(s1)-1;i>=0;i--{
		m:=0
		tsum:=""
		for j:=len(s2)-1;j>=0;j--{
			t:=int(s1[i]-'0')*int(s2[j]-'0')+m
			tsum=to.String(t%HEX)+tsum
			m=t/HEX
		}
		if m>0{
			tsum=to.String(m)+tsum
		}
		arr=append(arr,to.String(tsum)+get8(bei))
		bei++		
	}
	log.Println("结果数组mul1010:",arr)
	sum:=""
	for k,v:=range arr{
		if k==0{
			sum=v
			continue
		}
		sum=al1010(sum,v)
	}
	log.Println("结果mul1010:",sum)	
}
func get8(n int)string{
	s:=""
	for i:=0;i<n;i++{
		s=s+"0"
	}
	return s
}
func al1010(s1,s2 string) string{
	max:=s1
	min:=s2
	if len(s1)<len(s2){
		max=s2
		min=s1
	}
	m:=0
	s:=""
	k:=len(min)-1
	for i:=len(max)-1;i>=0;i--{
		t:=int(max[i]-'0') +m
		if k>=0{
			t=t+int(min[k]-'0')
		}
		k--
		s=to.String(t%HEX)+s
		m=t/HEX
	}
	if m>0{
		s=to.String(m)+s
	}
	return s
}
