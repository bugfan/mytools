// 今天同事问怎么把一份有同样属性名的不同类型的ｊｓｏｎ转化，我就说之前在哪里不知道看到这样的文章，goalng 的tag很强大，肯定是可以的。哈哈哈，我记录到ｇｉｔ上面个

type Mem struct {
	Age int `json:"age,string"`
}

func testTag() {
	d := `{"age":"45"}`
	a := &Mem{}
	json.Unmarshal([]byte(d), a)
	log.Println("Mem:", a)
}

// 因为我知道在哪个公众账号收藏了，找不到，今天　又从网上找到了　链接是：https://flaviocopes.com/go-tags/
