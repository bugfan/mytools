### 理解js借用功能
```
// 通过Function.prototype上的call和apply方法获得
function sayHello() { console.log(`G`+this.name)}
var a={name:'tian'}
sayHellp.call(a) // out Gtian

var a = Object.create(null); 
a.name = 'peter';
a.hasOwnProperty('name');   //报错
Object.prototype.hasOwnProperty.call(a, 'name');  // true

```
