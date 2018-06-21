@catalog

@page

@box({"className": "cover"})
# 现代javascript
#### 方怀南@TypeError
@boxEnd

@page

## TypeError课程介绍

### 访问地址

* 课程主页: https://github.com/typeerrorfeclass/home
* YY直播间: [34592948](https://0x9.me/j4v80)

### 联系方式

![微信二维码](https://github.com/typeerrorfeclass/home/raw/master/wechat.png)

@page

## 课程内容

### 课程模块
* 现代javascript相关概念
* babel的原理和使用
* 常用新语法学习

### 相关书籍
* 《ECMAScript 6 入门》阮一峰

@page

## 现代javascript相关概念

* ECMAScript是什么？
* ES6、ES7、ES2015、ES2016……是什么？
* tc39是什么？
* stage0、stage1、stage2是什么？

@page

## ECMAScript是什么?

### 基本概念
ECMAScript是一种由Ecma国际（前身为欧洲计算机制造商协会）通过ECMA-262标准化的脚本程序设计语言。这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，但实际上后两者是ECMA-262标准的<span class="red">实现和扩展</span>。

### ECMA-262
https://www.ecma-international.org/publications/standards/Ecma-262.htm

### 历史背景
javascript在最初推广时，为了蹭java的热度，起名叫做javascript。但是由于"java"是Oracle公司持有的注册商标，javascript标准化之后，采用了ECMAScript这个名称。目前在正式场合统一称为ECMAScript。

@page

##

@page

## babel

* babel-cli
* babel-preset
  * babel-preset-env
* babel-plugin

@page

## .babelrc

``` json
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "browsers": ["last 2 versions", "ie >= 10"]
        },
        "debug": false
      }
    ]
  ],
  "plugins": [
    "transform-class-properties",
    "transform-decorators-legacy",

    [
      "transform-react-jsx",
      {
        "pragma": "React.createElement"
      }
    ],

    [
      "transform-runtime",
      {
        "helpers": true,
        "polyfill": true,
        "regenerator": true,
        "moduleName": "babel-runtime"
      }
    ]
  ]
}

```