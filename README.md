# wx-mini-icon ![license](https://img.shields.io/badge/license-MIT-blue) ![version](https://img.shields.io/badge/version-1.0.0-brightgreen)
微信小程序自定义svg图标组件，可更改svg的颜色，大小
> ## 注意:该项目不包含任何svg图标文件，svg图标需自行下载
## 预览
> 此处使用的图标是开源项目[tabler-icons](https://github.com/tabler/tabler-icons)中的svg

![preview](./preview-img/Capture.PNG)
## 下载
直接下载src文件夹到项目中或者pull到本地
## 组件配置
在[mini-icon.js](./src/mini-icon.js)中将"path"改为svg所在的路径即可
>### svg图标需要放在微信小程序项目中
```javascript
  data: {
    path:"path/to/icons/",
    src:"",
  },
```
在页面配置文件"xxx.json"中注册组件
>### json文件中的组件路径为项目中的实际路径
```json
{
  "usingComponents":{
    "mini-icon":"path/to/mini-icon/mini-icon",
  }
}
```
组件注册完成后在页面中直接使用标签
```html
  <mini-icon type="settings" color="#fff" size"1em"></mini-icon>
```
### 标签属性
> 属性type的值不能为空，应为所需svg文件名，如使用"hello.svg"，在标签中type属性应设置为`type ="hello"`

|属性名|接受类型|是否可为空|
|---|---|---|
|type|String|否|
|color|String|是|
|size|String|是|
