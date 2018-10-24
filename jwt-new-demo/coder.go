package jwt

import (
	"encoding/json"
	"errors"
	"time"

	"github.com/bugfan/goini"

	"github.com/SermoDigital/jose/jws"
	"github.com/bugfan/to"
	jwt "github.com/dgrijalva/jwt-go"
)

type Conf struct {
	Method string // 加密算法
	Key    string // 加密key
	Issuer string // 签发者
	Expire int64  // 签名有效期
}

var (
	conf *Conf
)

func InitJWTConf() {
	conf = &Conf{
		Method: "HS256",
		Key:    goini.Env.Getenvd("JWT_SECRET", "sahjdjsgaudsiudhuywge99"), // from env
		Issuer: "thais",
		Expire: to.Int64(goini.Env.Getenvd("JWT_EXPIRE", "3600")), // form env
	}
}

/*
*	JWT HMAC
 */

func GetJWT(data string) (string, error) {
	claims := &jwt.StandardClaims{
		NotBefore: int64(time.Now().Unix()),
		ExpiresAt: int64(time.Now().Unix() + conf.Expire),
		Issuer:    conf.Issuer,
		Audience:  data,
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	ss, err := token.SignedString([]byte(conf.Key))
	if err != nil {
		return "", err
	}
	return ss, nil
}
func VerifyJWT(str string) (body string, err error) {
	t, err := jwt.Parse(str, func(*jwt.Token) (interface{}, error) {
		return []byte(conf.Key), nil
	})
	if err != nil {
		return body, err
	}
	m := make(map[string]interface{})
	bs, err := json.Marshal(t.Claims)
	if err != nil {
		return body, err
	}
	err = json.Unmarshal(bs, &m)
	if err != nil {
		return body, err
	}
	return to.String(m["aud"]), nil
}

/*
*	JWS HMAC
 */

// VerifyJWT 验证json web token
func VerifyJWT2(token string) (ret bool, err error) {
	jwtObj, err := jws.ParseJWT([]byte(token))
	if err != nil {
		return
	}
	err = jwtObj.Validate([]byte(conf.Key), jws.GetSigningMethod(conf.Method))
	if err == nil {
		ret = true
	}
	return
}

// GetJWT 获取json web token
func GetJWT2(data map[string]interface{}) (token string, err error) {
	payload := jws.Claims{}
	for k, v := range data {
		payload.Set(k, v)
	}
	now := time.Now()
	payload.SetIssuer(conf.Issuer)
	payload.SetIssuedAt(now)
	payload.SetExpiration(now.Add(time.Duration(conf.Expire) * time.Second))
	jwtObj := jws.NewJWT(payload, jws.GetSigningMethod(conf.Method))
	tokenBytes, err := jwtObj.Serialize([]byte(conf.Key))
	if err != nil {
		return
	}
	token = string(tokenBytes)
	return
}

/*
*	JWT HMAC v3
 */

func GetJWT3(data interface{}) (string, error) {
	claims := make(jwt.MapClaims)
	claims["exp"] = time.Now().Add(time.Duration(conf.Expire) * time.Second).Unix()
	claims["iat"] = time.Now().Unix()
	claims["iss"] = conf.Issuer
	claims["body"] = data // Add custom data

	t := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	ss, err := t.SignedString([]byte(conf.Key))
	if err != nil {
		return "", err
	}
	return ss, nil
}
func VerifyJWT3(str string) (body interface{}, err error) {
	t, err := jwt.Parse(str, func(*jwt.Token) (interface{}, error) {
		return []byte(conf.Key), nil
	})
	if err != nil {
		return nil, err
	}
	data, ok := (t.Claims).(jwt.MapClaims)
	if ok {
		return data["body"], nil
	}
	return nil, errors.New("JWT body is error type")
}
