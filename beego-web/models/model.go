package model

type Account struct {
	Id   int64  `json:"id"`
	Name string `json:"name"`
	Pwd  string `json:"pwd"`
}

// 多字段索引
func (u *Account) TableIndex() [][]string {
	return [][]string{
		[]string{"Id", "Name"},
	}
}
