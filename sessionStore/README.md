# 浏览器的一些存储机制
1. cookie 不说了
2. sessionStore，主要说说这个，以前还没咋用过，经过实验，一个浏览器tab就有自己的一份store，也是个字典可以删除添加，使用的时候需要自己调用一些api取出：
下面举出常用代码
```
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey)
}

```
