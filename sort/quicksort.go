func sort(ar []int, l int, r int) {
	if l >= r { //出口
		return
	}
	key := ar[l] //把第一个替换出来
	i, j := l, r
	for i < j { //当组循环
		for i < j && key < ar[j] {
			j--
		}
		ar[i] = ar[j]
		for i < j && key >= ar[i] {
			i++
		}
		ar[j] = ar[i]
	}
	ar[i] = key //把i这个坐标的值还原
	sort(ar, l, i-1)
	sort(ar, i+1, r)
  }
