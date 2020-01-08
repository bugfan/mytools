package tools

import (
	"crypto/md5"
	"encoding/base64"
	"encoding/hex"
	"encoding/json"
	"math/rand"
	"regexp"
	"strings"
	"time"

	"github.com/axgle/mahonia"
	"github.com/bugfan/to"
)

const (
	// 13*, 15*, 18*
	phone_regular = "^((1[3-9][0-9])|(15[^4])|(18[0,2,3,5-9])|(17[0-8])|(147))\\d{8}$"
	email_regular = "^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[c-oC-O_-]+)+$"
)

func IsPhoneNumber(mobileNum string) bool {
	reg := regexp.MustCompile(phone_regular)
	return reg.MatchString(mobileNum)
}

func IsEmail(email string) bool {
	reg := regexp.MustCompile(email_regular)
	return reg.MatchString(email)
}

func Strtomd5(s string) string {
	h := md5.New()
	h.Write([]byte(s))
	rs := hex.EncodeToString(h.Sum(nil))
	return rs
}

func Utf8togbk(s string) string {
	encoder := mahonia.NewEncoder("gbk")
	return encoder.ConvertString(s)
}

func ToDateString(t int64) string {
	//"2006-01-02 03:04:05 PM"
	return time.Unix(t, 0).Format("2006-01-02 15:04:05")
}

func RandomNumber(min, max int64) int64 {
	if min > max {
		v := min
		min = max
		max = v
	}
	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	return r.Int63n(max-min) + min
}

func ToUpper(str string) string {
	return strings.ToUpper(str)
}

func ToLower(str string) string {
	return strings.ToLower(str)
}

func CLen(s string) int {
	sl := 0
	rs := []rune(s)
	for _, r := range rs {
		rint := int(r)
		if rint < 128 {
			sl++
		} else {
			sl += 2
		}
	}
	return sl
}

func ToJSONString(o interface{}) (result string, err error) {
	b, err := json.Marshal(o)
	if err != nil {
		return "", err
	}
	return string(b), nil
}

// r must pointer
func ToJSONObject(s string, r interface{}) error {
	return json.Unmarshal([]byte(s), r)
}

func FirstVersionLessSecondVersion(curr_version string, target_version string) bool {
	if curr_version == "" {
		return true
	}
	curVer := strings.Split(curr_version, ".")
	if len(curVer) != 3 {
		return true
	}
	tarVer := strings.Split(target_version, ".")
	if len(tarVer) != 3 {
		return true
	}
	type Version struct {
		BigVer    int
		MiddleVer int
		SmallVer  int
	}
	toVersion := func(arr []string) *Version {
		v := &Version{
			BigVer:    int(to.Int64(arr[0])),
			MiddleVer: int(to.Int64(arr[1])),
			SmallVer:  int(to.Int64(arr[2])),
		}
		return v
	}
	Ver0 := toVersion(curVer)
	Ver1 := toVersion(tarVer)

	if Ver0.BigVer < Ver1.BigVer {
		return true
	} else if Ver0.BigVer == Ver1.BigVer {
		if Ver0.MiddleVer < Ver1.MiddleVer {
			return true
		} else if Ver0.MiddleVer == Ver1.MiddleVer {
			if Ver0.SmallVer < Ver1.SmallVer {
				return true
			}
		}
	}

	return false
}

func Base64Encode(source []byte) string {
	return base64.StdEncoding.EncodeToString(source)
}

func Base64Decode(source string) (result []byte, err error) {
	return base64.StdEncoding.DecodeString(source)
}
