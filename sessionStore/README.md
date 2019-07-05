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
3. localStore 整个浏览器用的一份，也是浏览器的存储机制
```
该语法用于设置 localStorage 项，如下:
localStorage.setItem('myCat', 'Tom');

该语法用于读取 localStorage 项，如下:
let cat = localStorage.getItem('myCat');

该语法用于移除 localStorage 项，如下:
localStorage.removeItem('myCat');

该语法用于移除所有的 localStorage 项，如下:
// 移除所有
localStorage.clear();
```
