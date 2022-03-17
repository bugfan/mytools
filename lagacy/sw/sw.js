// sw.js
console.log('service worker 注册成功')

self.addEventListener('install', event => {
// 跳过等待
//   self.skipWaiting()

  console.log('service worker 安装中....')
  // 引入 event.waitUntil 方法
  event.waitUntil(new Promise((resolve, reject) => {
    // 模拟 promise 返回错误结果的情况
    // reject('安装出错')
    resolve(console.log('安装成功'))
  }))
})

self.addEventListener('activate', event => {
  // 激活回调的逻辑处理
  console.log('service worker 激活成功')
  event.waitUntil(
    // 激活 Service Worker 之后马上控制所有终端
    self.clients.claim().then(() => {
        // 返回处理缓存更新的相关事情的 Promise
        console.log('service worker 激活后控制终端')
    })
  )
})

self.addEventListener('fetch', event => {
    // 直接返回 Response 对象
    // event.respondWith(new Response('Hello World!'))

    // 等待 1 秒钟之后异步返回 Response 对象
    // event.respondWith(new Promise(resolve => {
    // setTimeout(() => {
    //     resolve(new Response('Hello World!'))
    // }, 1000)
    // }))

    var req = event.request.clone();

    // var returnUrl = "https://imgf2.pop-fashion.com/global/images/free_login/shoe.png"
    
    console.log('check:',req)
    // debugger

    var headers = new Headers({});
    headers.set('Cookie','ttt=90')
    // event.respondWith(
    //   fetch(returnUrl, {
    //     // mode: 'no-cors'
    //   })
    // );

    fetch("http://127.0.0.1:9090/a1", {
        method: "POST",
        headers: headers,
        cache: 'no-cache',
    }).then(res => {
      console.log('check2:',res)
    })

    return

    event.request.url="http://127.0.0.1:8080/imgs/2.jpg"
    console.log('service worker 抓取请求成功: ' + event.request.url,event)
})