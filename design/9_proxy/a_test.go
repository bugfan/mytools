package proxy

import (
	"log"
	"testing"
)

func TestA(*testing.T) {
	var handle Handle
	handle = NewTool()
	log.Println("result:", handle.Fuck())
}
