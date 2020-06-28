 ### 获取点击，并拿到event下面的nodeName
 ```
 document.body.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
      console.log("Clicked", event.target.textContent);
    }
  });
  ```
### 点击事件
```
window.addEventListener("click", () => {
    console.log("You knocked?");
  });
```
### 所有事件
```
Object.keys(window).forEach(key => {
    if (/^on/.test(key)) {
        window.addEventListener(key.slice(2), event => {
            console.log(event);
        });
    }
});
```
