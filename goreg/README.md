### go匹配head，body开始，body结束正则
## 此代码，为核心替换正则表达式，可以帮助实现类似百度推广类似的功能

```
positionOptions: [{
            value: `(?i:</HEAD>)`,
            label: 'head之前'
        }, {
            value: '(?i:<body(.*?)(.*?)>)',
            label: 'body开始'
        },{
            value: '(?i:</BODY>)',
            label: 'body结束'
        }],
```
