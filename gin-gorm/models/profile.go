package models

type Profile struct {
	ID        int64 `json:"id"`
	User      User  `gorm:"ForeignKey:UserRefer"`
	Sex       bool  `json:"sex"`
	UserRefer int64
}
