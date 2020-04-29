package main

import (
	"fmt"

	"github.com/adjust/gorails/session"
)

// sessionCookie - raw _<your app name>_session cookie
func getRailsSessionData(sessionCookie string) (decryptedCookieData []byte, err error) {
	decryptedCookieData, err = session.DecryptSignedCookie(sessionCookie, secretKeyBase, salt, signSalt)

	return
}

const (
	secretKeyBase = "008d3270b29ea87d607f589d8f23c7586e968ba128eb7df89e7b136875f7cf34f4edb41bf2826712cfc6a2d52d5558bb20ed62406e32cd4ae6d16eb2282f9073" // can be found in config/initializers/secret_token.rb
	salt          = "encrypted cookie"                                                                                                                 // default value for Rails 4 app
	signSalt      = "signed encrypted cookie"                                                                                                          // default value for Rails 4 app
)

func main() {
	data, err := getRailsSessionData("Skc1NnVLRVRzRzlpMDJDNzVHSnRDRENsUkN4alJCNXdRSUQvMUorSGZabkJJbDlnbXpqcTFmQ3RSbzJ2Qm4zMG5BWWpOSjlIV1pvTzBEMGdGRU01dkFST2RJRlZPK2xka04reEJud3lCMFVEQnhZajJOTHhlQUhDdzZWZGVWNnFWOEVPSmpVcUFoY0VkWTFjb2xqRk1YR3ExazNsd0hoZFBIRTZxWEhTUjE5bG4rTEgwQkZubnpCWjU5Zmx5b1BZUEVTSTA5aEtJV0NldWNIbWxETjhKN01pcGJUaXlTL0tSS2hHVUp1eGllRFFvWnhkNFVacXJCV1hKK1ptT0ZDV0NvajRoeVEvUFJYa0tTYjhYM3BlVXFFYzl0NklibmhpYUIyZ1ZtdlpLa2VRR0RXa3dERUhDaHZSRFpSYW1tSGk2S1VQaSs4TVFLSDVlbk1YaFFlaW1TRjY1QXdmRE9ra1NibWYvMGVqU0tKVGRpMDIzeStNeWtRaGRjWlFsUmZ2QlFiWEpVcHV4SVRPZWo2aU9XeHJEQT09LS1oTnJ3WVlhcjFOYzFLTFJRbzVKODd3PT0%3D--fb0acbece8a4a04f0f61211ba057237b1dfdcfe7")
	fmt.Println("fmt/L:", err, string(data))
}
