package main

import (
	"encoding/json"
	"io/ioutil"
    "fmt"
    jwt "github.com/dgrijalva/jwt-go"
)

func main() {
	bs,_:=ioutil.ReadFile("./test.json")
	fmt.Println(HasAuthority(`D1`,string(bs)))
							 
}

func HasAuthority(auth,thatStr string) bool{
	mySigningKey := []byte("yWN6j)?2K_q9DtH-C@u-%Ac5[84}-dWUca&G{R/#")
	t, err := jwt.Parse(thatStr, func(*jwt.Token) (interface{}, error) {
		return mySigningKey, nil
	})
	if err != nil {
		fmt.Println("parase with claims failed.", err)
		return false
	}
	bs,_:=json.Marshal(t.Claims)
	newS:=myMarshal(bs)
	for _,v:=range newS{
		fmt.Println("CASE:",v)
		if v==auth{
			return true
		}
	}
	return false
}
func CanAccess(thatStr string) bool{
	mySigningKey := []byte("yWN6j)?2K_q9DtH-C@u-%Ac5[84}-dWUca&G{R/#")
	_, err := jwt.Parse(thatStr, func(*jwt.Token) (interface{}, error) {
		return mySigningKey, nil
	})
	if err != nil {
		fmt.Println("parase with claims failed.", err)
		return false
	}
	return false
}
type MyJWTStruct struct{
	User_id string `json:"user_id"`
	Username string `json:"username"`
	Exp		float64 `json:"exp"`
	Email 	string `json:"email"`
	Orig_iat float64 `json:"orig_iat"`
	Modules []string `json:"modules"`
}
func myMarshal(bs []byte) []string{
	obj:=MyJWTStruct{}
	json.Unmarshal(bs,&obj)
	fmt.Println("全部数据打印:",obj)
	return obj.Modules
}
