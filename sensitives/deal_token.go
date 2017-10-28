package sensitives

import (
	. "fmt"
	"io/ioutil"
	"log"
	"regexp"
	"strings"
)

const (
	//多于3个数字、连续字母（手机号、座机号、qq、邮箱、微信（变量名））
	reg1 = `[\d]{3,}|[a-zA-Z]{4,}`
)

var (
	tokens []string
)

func LoadTokens() {
	//根据文件名找关键字
	text, err := ioutil.ReadFile("./config/token1.ini")
	if err != nil {
		log.Fatal(err)
		return
	}
	tokens = strings.Split(string(text), ",")
	//logrus.Infof("tokens: %+v", tokens)
}

func DealSensitiveString(str string) (string, error) {
	//匹配ascii
	reg := regexp.MustCompile(reg1)
	str = reg.ReplaceAllString(str, "*")
	//logrus.Infof("敏感词过滤: source{%s} tokens{%+v}", str, tokens)
	//处理汉字
	for j := 0; j < len(tokens); j++ {
		//`[阴( )+|(\\t)+道]`
		//Printf("NO.%d %s (%d)\n", j, tokens[j], len(tokens[j]))
		reg2 := "("
		kl := len(tokens[j])
		if kl > 3 {
			for k := 0; k < kl; k += 3 {
				reg2 += Sprintf(`%s`, tokens[j][k:k+3])
				reg2 += " *\\t*"
			}
			reg2 = reg2[0 : len(reg2)-5] //去掉么规则
		} else {
			if tokens[j][0:1] <= "z" {
				//处理字母
				wl := len(tokens[j])
				for q := 0; q < wl; q++ {
					reg2 += Sprintf(`%s`, tokens[j][q:q+1])
					reg2 += " *\\t*"
				}
				reg2 = reg2[0 : len(reg2)-5]
			} else {
				//处理一个汉zi
				reg2 += Sprintf(` *\t*%s *\t*`, tokens[j][0:3])
			}
		}
		reg2 = reg2 + ")"
		//Println(reg2)
		reg = regexp.MustCompile(reg2)
		str = reg.ReplaceAllString(str, "*")
	}
	//logrus.Infof("敏感词过滤结果: %s", str)
	return str, nil
}

// func get8(i int64) string {
// 	s8 := "*"
// 	if i > 1 {
// 		s8 = get8(i-1) + "*"
// 		return s8
// 	}
// 	// //`[\x{4e00}-\x{9fa5}]`
// 	// reg := `(卫 *\t*星)`
// 	// rr := regexp.MustCompile(reg)
// 	// fmt.Printf("mymain:%q\n", rr.ReplaceAllString("卫星 卫    星465卫		星 ？？？？？卫卫？星", "*"))

// 	return s8
// }
