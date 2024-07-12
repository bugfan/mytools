# Web前端 水印实验

## 方法

**页面简单，四个imgBox，从左到右分别是原图像、含有可见水印的图像、被添加的数字水印和添加了该数字水印的结果图，采用flex布局**

1. 明水印

   参考[从破解某设计网站谈前端水印(详细教程)](https://juejin.cn/post/6900713052270755847)

   用svg生成背景图片，再用getElementById和appendChild方法添加到特定位置

   水印内容：“我爱Web前端”

2. 暗水印

   参考[不能说的秘密——前端也能玩的图片隐写术](http://www.alloyteam.com/2016/03/image-steganography/)

   首先要获取文字的像素信息，先用 canvas 在画布上打印文字，获取像素信息

   > var ctx = document.getElementById('canvas').getContext('2d');
   >
   > var textData;
   >
   > ctx.font = '30px Microsoft Yahei';
   >
   > ctx.fillText('我爱Web前端', 40, 130);
   >
   > textData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height).data;

   然后对文字的像素和原始图片像素进行处理，修改图片该通道分量的最低位，如果有文字信息，则最低位置为 1，否则为 0。

   

   >for (var i = 0; i < oData.length; i++) {
   >
   >​        if (i % 4 == bit) {
   >
   >​          // 只处理目标通道
   >
   >​          if (newData[i + offset] === 0 && (oData[i] % 2 === 1)) {
   >
   >​            if (oData[i] === 255) {
   >
   >​              oData[i]--;
   >
   >​            } else {
   >
   >​              oData[i]++;
   >
   >​            }
   >
   >​          } else if (newData[i + offset] !== 0 && (oData[i] % 2 === 0)) {
   >
   >​            if (oData[i] === 255) {
   >
   >​              oData[i]--;
   >
   >​            } else {
   >
   >​              oData[i]++;
   >
   >​            }
   >
   >​          }
   >
   >​        }
   >
   >​      }

   