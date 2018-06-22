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

![微信二维码](https://typeerrorfeclass.github.com/home/wechat.png)

@page

## 课程内容

### 课程模块
* 现代javascript相关概念
* babel的原理和使用
* 常用新语法学习

### 相关书籍
* 《ECMAScript 6 入门》阮一峰

@page

@box({"className": "cover"})
# ECMAScript
@boxEnd

@page

## 常见问题

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

## ES6、ES2015……是什么？

* ES6的第一个版本，在2015年6月发布，正式名称就是《ECMAScript 2015标准》（简称 ES2015）。
* 2016年6月，小幅修订的《ECMAScript 2016标准》（简称 ES2016）发布，这个版本可以看作是 ES6.1 版。
* ES6 既是一个历史名词，也是一个泛指，含义是5.1版以后的JavaScript的下一代标准，涵盖了ES2015、ES2016、ES2017等等。

@page

## tc39是什么？

### 介绍
任何人都可以向标准委员会（又称TC39委员会）提案，要求修改语言标准。

一种新的语法从提案到变成正式标准，需要经历五个阶段。每个阶段的变动都需要由 TC39 委员会批准。

```
Stage 0 - Strawman（展示阶段）
Stage 1 - Proposal（征求意见阶段）
Stage 2 - Draft（草案阶段）
Stage 3 - Candidate（候选人阶段）
Stage 4 - Finished（定案阶段）
```

一个提案只要能进入 Stage 2，就差不多肯定会包括在以后的正式标准里面。

### tc39官网
http://www.ecma-international.org/memento/TC39.htm

@page

@box({"className": "cover"})
# babel
@boxEnd

@page

## babel基本概念

### babel是什么？
将新语法转换为ES5老语法的<span class="red">转译器</span>（transpiler）。

### 相关模块
* babel-core：babel的核心
* babel-cli：babel的命令行工具
* babel-plugin：语法插件
* babel-preset：语法插件的集合（语法的集合就是语言的版本）

### babel官网
http://babeljs.io/

@page

## babel的基本使用

### 安装
``` sh
npm i babel-cli -g
```

### 基本使用
``` sh
cd demo/babel-basic-using
npm i
babel es6.js
```

@page

## babel-preset-env

### 强烈推荐
babel-preset-env是babel官方推荐，换句话说就是你最好永远用它，不要用别的preset。

### 好处
* 根据配置可以生成兼容不同版本浏览器或者node环境的代码。
* 可转译所有的新语法，也可以根据环境的兼容性，不转译某些语法。

### 相关资料
http://2ality.com/2017/02/babel-preset-env.html

@page

## babel-preset-env配置案例

### 兼容上两个版本，IE10
``` json
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "browsers": ["last 2 versions", "ie >= 10"]
        }
      }
    ]
  ]
}
```

### 兼容Chrome 65
``` json
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "chrome": 65
        }
      }
    ]
  ]
}

```

@page

## babel配置文件

### babel使用的配置文件
babel-cli默认使用当前目录下的.babelrc文件作为配置文件，采用json格式。

### 不使用配置文件
使用`--no-babelrc`选项可以让babel-cli不是用配置文件，此时需要使用命令行参数配置babel-cli。

### 案例
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

@page

## 只转换语法就够了吗？

### 请看这段代码
``` js
const prom = new Promise((resolve, reject) => {
  setTimeout(_ => resolve(), 1000)
})
```

### 转换后的代码
``` js
"use strict";

var prom = new Promise(function (resolve, reject) {
  setTimeout(function (_) {
    return resolve();
  }, 1000);
});
```
@page

## babel-polyfill & babel-plugin-transform-runtime

### babel-polyfill
先于业务代码加载到浏览器中的一段脚本，用ES5实现的版本，补充浏览器中缺乏的全局对象/类型/函数等新特性。

### babel-plugin-transform-runtime
babel-polyfill很大。

不想污染全局，比如不想在window添加字段。

在babel转译过程中，在使用了新特性的代码文件头部添加`require`语句，将ES5实现版本引用到业务代码中。使用什么特性，就引用什么，并且不会污染全局。

@page

@box({"className": "cover"})
# 常用新语法
@boxEnd

@page

## let和const

为了规避var关键字的“变量作用域提升”问题而产生的定义变量语法。

### 要点
* 什么是作用域提升？let定义的变量，其作用域与用var定义的变量有什么区别？
* 闭包传递时，与用var定义的变量有什么区别？
* const到底指的是谁不能变？

@page

## 解构赋值

``` js
const [a, b] = [1, 2]
console.log(a, b)

const [a, b, c = 3] = [1, 2]
console.log(a, b, c)

const { a, b } = { a: 1, b: 2 }
console.log(a, b)

const { a: x, b } = { a: 1, b: 2 }
console.log(a, b, x)
```

@page

## 模板字符串

不要再用“+”号组合字符串了！

@page

## 正则表达式的s修饰符

传统正则表达式中的“.”符，不能匹配换行符，使用s修饰符之后“.”可以匹配换行符。

### 案例
``` js
const str = 'Hello \nworld!'
const reg1 = /Hello.+world!/
const reg1 = /Hello.+world!/s

reg1.test(str)
reg2.test(str)
```

@page

## Number.isFinite()和Number.isNaN()

isFinite判断是不是有限数值。

isNaN判断是不是NaN。

### 要点
* 什么是Infinity？
* 什么是NaN？

@page

## Number.isSafeInteger()

JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。isSafeInteger用来判断一个数是不是落在这个范围内。

### 要点
* Number.MIN_SAFE_INTEGER
* Number.MAX_SAFE_INTEGER

### 案例
* is-odd 判断是不是奇数

@page

@box({"className": "cover"})
# Object专题
@boxEnd

@page

## 属性的简洁表示法

@page

## 属性名表达式

@page

## name属性

@page

## Object.is()

### ==和===的缺点
* ==会自动转换类型
* ===不认为NaN和NaN相等，认为+0和-0相等

### 要点
* “Same-value equality”（同值相等）

@page

## Object.assign()

@page

## 可枚举性和遍历

@page

## \_\_proto\_\_属性

### Object.setPrototypeOf()和Object.getPrototypeOf()

@page

## 扩展：原型链
@image(./img/protochain.jpg)

@page

## Object.keys()

@page

## Object.values()

@page

## Object.entries()

@page

## 对象的扩展运算符