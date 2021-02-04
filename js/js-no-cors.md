### 如题
```
fetch('http://127.0.0.1:9098/a', {
        method: "GET",
  mode: "no-cors",
  }).then(function(res) {
 console.log("Response succeeded?", JSON.stringify(res.ok));
 console.log(JSON.stringify(res));
}).catch(function(e) {
 console.log("fetch fail", JSON.stringify(params));
});
```
