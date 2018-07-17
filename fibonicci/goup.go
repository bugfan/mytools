func goup() {
	start := 1
	next := 1
	for i := 0; i < floor; i++ {
		if i < 2 {
			continue
		}
		fmt.Printf("上%v层楼有:%d\n", i, start+next)
		tmp := start + next
		start = next
		next = tmp
	}
}
