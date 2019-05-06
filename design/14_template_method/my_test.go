package my

import (
	"log"
	"testing"
)

func TestMy(t *testing.T) {
	chef_zhang := NewChefZhang()
	chef_zhang.Cook()

	chef_liu := NewChefLiu()
	chef_liu.Cook()

	log.Println("Test ok")
}
