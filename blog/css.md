## 1、css盒模型
- 标准盒模型：box-sizing:content-box
- 怪异盒模型：box-sizing:border-box; width=width+padding+border
- box-sizing:padding-box;widht=padding-left+padding-right+width
## 2、画一条0.5px的线
- 采用meta viewport的方式
- 采用 border-image的方式
- 采用transform: scale()的方式
  ```
  transform: scaleY(0.5);
  transform-origin: 50% 100%;
  ```
## 3、transition和animation的区别
- Animation和transition大部分属性是相同的，他们都是随时间改变元素的属性值，他们的主要区别是transition需要触发一个事件才能改变属性，而animation不需要触发任何事件的情况下才会随时间改变属性值，并且transition为2帧，从from .... to，而animation可以一帧一帧的。