## 想设计个类似java那样的线程池

```
func main() {

	// 一开始只有一个地方需要限制并发，简单处理

	ch := make(chan struct{}, 10)

	for i := 0; i < 1000; i++ {
		ch <- struct{}{}
		go func() {
			defer func() {
				<-ch
			}()

			doSomething()
		}()
	}
  
  // 然后有多个地方需要限制并发，复用一下代码，形成 semaphore 提供语义化的 API

	sema := semaphore.NewWeighted(10)

	for i := 0; i < 1000; i++ {
		sema.Acquire(context.Background())
		go func() {
			defer sema.Release(1)

			doSomething()
		}()
	}

  // 然后还是发现，使用 semaphore，样板代码太多了，直接使用一个 pool 简洁很多

	pool := NewPool(10)

	for i := 0; i < 1000; i++ {
		pool.Go(doSometing)
	}
}
```
