package main

import (
    "fmt"
    "time"
	"log"
    jwt "github.com/dgrijalva/jwt-go"
)

var (
    key []byte = []byte("-jwt-hzwy23@163.com")
)

// 产生json web token
func GenToken() string {
    claims := &jwt.StandardClaims{
        NotBefore: int64(time.Now().Unix()),
        ExpiresAt: int64(time.Now().Unix() + 1000),
        Issuer:    "hzwy23",
    }
    
    token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
    ss, err := token.SignedString(key)
    if err != nil {
		log.Println("lle:",err)
        return ""
    }
    return ss
}

// 校验token是否有效
func CheckToken(token string) bool {
    _, err := jwt.Parse(token, func(*jwt.Token) (interface{}, error) {
        return key, nil
    })
    if err != nil {
        fmt.Println("parase with claims failed.", err)
        return false
    }
    return true
}