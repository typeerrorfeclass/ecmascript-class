@catalog

@page

@box({"className": "cover"})
# 现代javascript
#### 方怀南@TypeError
@boxEnd

@page

## TypeError课程介绍

TypeError前端直播室是一个线上前端技术培训项目, 目前和专业培训机构合作打造课程.

获取详细信息请扫码加微信.

### 访问地址

* 主页: [typeerrorfeclass.github.io](https://typeerrorfeclass.github.io)
* 直播: [YY直播间34592948](https://www.yy.com/34592948/34592948)
* github: [@typeerrorfeclass](https://github.com/typeerrorfeclass)

### 微信扫码

![微信二维码](https://typeerrorfeclass.github.io/assets/wechat.png)

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

* ECMAScript是什么?
* ES6、ES7、ES2015、ES2016……是什么?
* tc39是什么?
* stage0、stage1、stage2是什么?

@page

## ECMAScript是什么?

### 基本概念
ECMAScript是一种由Ecma国际(前身为欧洲计算机制造商协会)通过ECMA-262标准化的脚本程序设计语言. 这种语言在万维网上应用广泛, 它往往被称为JavaScript或JScript, 但实际上后两者是ECMA-262标准的<span class="red">实现和扩展</span>.

### ECMA-262
https://www.ecma-international.org/publications/standards/Ecma-262.htm

### 历史背景
javascript在最初推广时, 为了蹭java的热度, 起名叫做javascript. 但是由于"java"是Oracle公司持有的注册商标, javascript标准化之后, 采用了ECMAScript这个名称. 目前在正式场合统一称为ECMAScript.

@page

## ES6、ES2015……是什么?

* ES6的第一个版本, 在2015年6月发布, 正式名称就是《ECMAScript 2015标准》(简称 ES2015).
* 2016年6月, 小幅修订的《ECMAScript 2016标准》(简称 ES2016)发布, 这个版本可以看作是 ES6.1 版.
* ES6 既是一个历史名词, 也是一个泛指, 含义是5.1版以后的JavaScript的下一代标准, 涵盖了ES2015、ES2016、ES2017等等.

@page

## tc39是什么?

### 介绍
任何人都可以向标准委员会(又称TC39委员会)提案, 要求修改语言标准.

一种新的语法从提案到变成正式标准, 需要经历五个阶段. 每个阶段的变动都需要由 TC39 委员会批准.

```
Stage 0 - Strawman(展示阶段)
Stage 1 - Proposal(征求意见阶段)
Stage 2 - Draft(草案阶段)
Stage 3 - Candidate(候选人阶段)
Stage 4 - Finished(定案阶段)
```

一个提案只要能进入 Stage 2, 就差不多肯定会包括在以后的正式标准里面.

### tc39官网
http://www.ecma-international.org/memento/TC39.htm

@page

@box({"className": "cover"})
# babel
@boxEnd

@page

## babel基本概念

### babel是什么?
将新语法转换为ES5老语法的<span class="red">转译器</span>(transpiler).

### 相关模块
* babel-core: babel的核心
* babel-cli: babel的命令行工具
* babel-plugin: 语法插件
* babel-preset: 语法插件的集合(语法的集合就是语言的版本)

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
babel-preset-env是babel官方推荐, 换句话说就是你最好永远用它, 不要用别的preset.

### 好处
* 根据配置可以生成兼容不同版本浏览器或者node环境的代码.
* 可转译所有的新语法, 也可以根据环境的兼容性, 不转译某些语法.

### 相关资料
http://2ality.com/2017/02/babel-preset-env.html

@page

## babel-preset-env配置案例

### 兼容上两个版本, IE10
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
babel-cli默认使用当前目录下的.babelrc文件作为配置文件, 采用json格式.

### 不使用配置文件
使用`--no-babelrc`选项可以让babel-cli不是用配置文件, 此时需要使用命令行参数配置babel-cli.

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

## 只转换语法就够了吗?

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

## polyfill和transform-runtime

### babel-polyfill
先于业务代码加载到浏览器中的一段脚本, 用ES5实现的版本, 补充浏览器中缺乏的全局对象/类型/函数等新特性.

### babel-plugin-transform-runtime
babel-polyfill很大.

不想污染全局, 比如不想在window添加字段.

在babel转译过程中, 在使用了新特性的代码文件头部添加`require`语句, 将ES5实现版本引用到业务代码中. 使用什么特性, 就引用什么, 并且不会污染全局.

@page

@box({"className": "cover"})
# 常用新语法
@boxEnd

@page

## let和const

为了规避var关键字的“变量作用域提升”问题而产生的定义变量语法.

### 要点
* 什么是作用域提升?let定义的变量, 其作用域与用var定义的变量有什么区别?
* 闭包传递时, 与用var定义的变量有什么区别?
* const到底指的是谁不能变?

@page

## 解构赋值

### 案例
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

### 着重强调
不要再用“+”号组合字符串了!很业余, 很容易出错!

### 案例
``` js
const foo = '3'
const bar = foo + 2 + 1
console.log(bar) // 这里的bar等于什么?
```

@page

## 正则表达式的s修饰符

传统正则表达式中的“.”符, 不能匹配换行符, 使用s修饰符之后“.”可以匹配换行符.

### 案例
``` js
const str = 'Hello \nworld!'
const reg1 = /Hello.+world!/
const reg2 = /Hello.+world!/s

reg1.test(str)
reg2.test(str)
```

@page

## isFinite和isNaN

isFinite判断是不是有限数值.

isNaN判断是不是NaN.

### 要点
* 什么是Infinity?
* 什么是NaN?

@page

## isSafeInteger

JavaScript 能够准确表示的整数范围在-2^53到2^53之间(不含两个端点), 超过这个范围, 无法精确表示这个值. isSafeInteger用来判断一个数是不是落在这个范围内.

### 要点
* Number.MIN_SAFE_INTEGER
* Number.MAX_SAFE_INTEGER

### 扩展
* 每天下载300万次的库(看源码): [is-odd](https://www.npmjs.com/package/is-odd)

@page

@box({"className": "cover"})
# Object专题
@boxEnd

@page

## 属性的简洁表示法

### 案例

#### 老语法
``` js
const foo = 1
const bar = 2

const obj = {
  foo: foo,
  bar: bar
}
```

#### 新语法
``` js
const foo = 1
const bar = 2

const obj = { foo, bar }
```

@page

## 属性名表达式

### 案例

#### 老语法
``` js
function fn (foo, bar) {
  const ret = {}

  ret[foo] = 'foo'
  ret[bar] = 'bar'

  return ret
}
```

#### 新语法
``` js
function fn (foo, bar) {
  return {
    [foo]: 'foo',
    [bar]: 'bar'
  }
}
```

@page

## 函数的name属性

Function对象的name属性, 可以获得函数名.

### 应用场景

调试工具, 日志打印等.

### 案例
``` js
function foobar () {
  return {}
}

function invoke (fn) {
  console.log(fn.name)
  return fn()
}
```

@page

## Object.is

is是一种新的相等算法的实现.

`==`和`===`的缺点: 

* `==`会自动转换类型
* `===`不认为NaN和NaN相等, 认为+0和-0相等

### 要点
* “Same-value equality”(同值相等)

### 扩展

`==`号的等值表(如果没有信心记住, 就不要用`==`号)

@image(./img/equality.png)

@page

## Object.assign

assign可以用来浅复制或者浅合并对象.

### 案例
``` js
const foo = { a: 1, b: 2 }
const fee = { c: 3, d: 4 }

// 复制
const bar = Object.assign({}, foo)

// 合并
const baz = Object.assign({}, foo, fee)
```

### 要点
* 什么是“浅”, 什么是“深”?

### 扩展
* 面试题: 如何深拷贝一个对象?

@page

## \_\_proto\_\_

\_\_proto\_\_是指向对象原型的指针, 只有浏览器承诺支持, 其他环境不一定, 建议不要直接使用.

相关知识点: Object.setPrototypeOf()和Object.getPrototypeOf()

### 扩展

原型链

@image(./img/protochain.jpg)

@page

## keys、values、entries

* keys用来找到对象自身可枚举的属性名
* values用来找到对象自身可枚举的属性值
* entries把对象转化为一个key-value数组

### 扩展

* 各种循环遍历对象的方法
* 面试题: 把字符串/数组/类对象传入Object.keys会返回什么?

@page

## getOwnPropertyDescriptor

对象的每个属性都有一个描述对象(Descriptor), 用来控制该属性的行为. Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象.

### 案例
``` js
let obj = { foo: 123 };
Object.getOwnPropertyDescriptor(obj, 'foo')
//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }
```

### 扩展

#### 可枚举性

对象字段的enumerable属性, 称为“可枚举性”, 如果该属性为false, 就表示某些操作会忽略当前属性.

* for...in循环: 只遍历对象自身的和继承的可枚举的属性.
* Object.keys(): 返回对象自身的所有可枚举的属性的键名.
* JSON.stringify(): 只串行化对象自身的可枚举的属性.
* Object.assign():  忽略不可枚举的属性, 只拷贝对象自身的可枚举的属性.

@page

## 展开运算符

使用...符号, 可以将对象“展开”.

### 案例
``` js
const foo = { a: 1, b: 2 }
const bar = {
  ...foo,
  c: 3
}

console.log(bar)
```

对象展开的妙用. 

建议: 请编写地道的js代码, 尤其是在github上, 不要一眼看上去就很业余.

``` jsx
// 代替assign构造对象
const foo = {
  a: 1,
  ...bar // 展开对象
}

// react中常使用展开运算提书写效率
function FoobarComponent (props) {
  return <div>
    <Dialog {...props.dialogData} />
  </div>
}
```

@page

@box({"className": "cover"})
# 数组专题
@boxEnd

## 展开运算符

使用...符号, 可以将数组"展开". 

### 案例

数组展开的妙用. 

``` js
// 代替apply
const foo = [1, 2, 3]
const bar = [4, 5, 6]
foo.push(...bar) // 相当于foo.push(4, 5, 6)

// 假数组转真数组
var nodeList = document.querySelectorAll('div')
var earlArray = [...nodeList]

// 代替concat等复杂操作, 构造数组
var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
```

@page

## find和findIndex

建议: 不要再使用for循环或者forEach或者filter去寻找数组中的某个元素!

### 案例
``` js
// 找出第一个小于0的元素
[1, 4, -5, 10].find((n) => n < 0)

// 找出第一个小于0的元素的下标
[1, 4, -5, 10].findIndex((value, index, arr) => value < 0)
```

### 要点
* findIndex和indexOf的区别

### 扩展
* map用来将一个数组映射为另一个数组
* reduce用来通过某种运算归并数组元素
* filter用来过滤满足条件的数组元素
* some用来判断数组中有没有元素满足某种条件
* every用来判断数组中的元素是不是都满足某种条件
* forEach用来做遍历(除非你用forEach写出的代码更短, 否则不要用)
* find和findIndex用来寻找符合条件的元素

@page

## includes

includes用来判断数组中是不是包含某个值. 

### 要点
* includes和indexOf的区别. 

@page

@box({"className": "cover"})
# 函数专题
@boxEnd

@page

## 参数展开

### 案例
``` js
// 代替arguments
function fn (...params) {
  console.log(params)
}

// 表示剩余参数
function fn (a, b, ...otherParams) {
  console.log(otherParams)
}
```

@page

## 参数默认值

ES6函数的参数列表中可以写参数默认值.

### 案例

老语法:
``` js
function foobar (p1) {
  p1 = (typeof p1 === 'undefined') ? 'something' : p1
  // ...
}
```

新语法: 
``` js
function foobar (p1 = 'something') {
  // ...
}
```

### 扩展

* 老语法中的坑: 
  * 由于特殊类型转换为布尔值问题导致的bug
* 结论: 能用新语法不要用老语法

@page

## 箭头函数

箭头函数是一种定义函数的新语法. 

### 案例

老语法: 
``` js
[1, 2, 3].map(function (el) {
  return el * 2
})
```

新语法: 
``` js
[1, 2, 3].map(el => el * 2)
```

### 要点
* 箭头函数对于this指针的规定
* 匿名函数尽量使用箭头函数性质定义

@page

## bind

bind是给函数绑定this指针和参数的方法. 

学名: 柯里化(curry)

### 案例

老语法: 
``` js
function hello (otherWords = '') {
  console.log('Hello ' + this.name + '.\n' + otherWords)
}

const lucy = {
  name: 'Lucy'
}

function niceToMeetLucy() {
  hello.call(lucy, 'Nice to neet you.')
}

niceToMeetLucy()
```

新语法: 
``` js
function hello (otherWords = '') {
  console.log('Hello ' + this.name + '.\n' + otherWords)
}

const lucy = {
  name: 'Lucy'
}

const niceToMeetLucy = hello.bind(lucy, 'Nice to neet you.')

sayHelloToLucy()
```

### 扩展
* javascript中的this指针
* 面试题: call/apply/bind的作用分别是什么?

@page

@box({"className": "cover"})
# class专题
@boxEnd

@page

## 关于class你需要知道的

* 如何定义class?
* class关键字背后做了什么(对应到ES5老语法)?
* 如何继承一个class?

### 案例
老语法: 
``` js
function Person (name = 'Fang Huainan') {
  this.name_ = name
}

Person.prototype.sayName = function () {
  console.log('My name is ' + this.name_ + '.')
}

const somebody = new Person('Jack')

somebody.sayName()
```

新语法: 
``` js
class Person {
  constructor (name = 'Fang Huainan') {
    this.name_ = name
  }

  sayName () {
    console.log('My name is ' + this.name_ + '.')
  }
}

const somebody = new Person('Jack')

somebody.sayName()
```

属性: 
``` js
class Person {
  get name () {
    return this.name_
  }

  constructor (name = 'Fang Huainan') {
    this.name_ = name
  }
}

const somebody = new Person('Jack')

console.log(somebody.name)
```

static: 
``` js
class Person {
  static firstUpperCase(name) {
    const ret = name
    //...
    return ret
  }


  constructor (name = 'Fang Huainan') {
    this.name_ = Man.firstUpperCase(name)
  }
}

const somebody = new Person('jack')

console.log(somebody.name)

```

继承: 
``` js
class Person {
  constructor (name = 'Fang Huainan') {
    this.name_ = name
  }

  sayName () {
    console.log('My name is ' + this.name_ + '.')
  }

  sayHello (otherName = '') {
    console.log('Hello ' + otherName + '.')
  }
}

class GentlePerson extedns {
  constructor (name, gentleWords = 'Nice to meet you.') {
    super(name)
    this.gentleWords_ = gentleWords
  }

  sayHello (otherName = '') {
    console.log(super.sayHello(otherName))
    console.log(this.gentleWords_)
  }
}
```

### 要点
* 继承到底是如何实现的？对象属性和方法的向上搜索规则.
* 不要学了个继承就到处用! 尽量少用集成! 能用组合代替就不要用继承!
* 什么时候使用static属性和方法?

### 扩展

javascript对象模型. 

* class/function/prototype/\_\_proto\_\_之间的关系是什么?

@page

@box({"className": "cover"})
# 异步专题
@boxEnd

@page

## javascript中的事件循环

### 一定要建立画面感

@image(./img/eventloop.jpg)

@page

## 三种异步

* macro task
* micro task
* 物理线程(x)

### Task优先级队列

@image(./img/task.jpg)

@page

## Promise

异步回调的新语法，防止出现过多的缩进，同时统一了回调函数的形式，没有什么神奇的。

### 案例

老语法：
``` js
function delay (fn, timeout, finishCallback) {
  setTimeout(_ => {
  fn()
  finishCallback()
  }, timeout)
}

delay(_ => console.log('foobar', 1000, _ => console.log('finished')))
```

新语法：
``` js
// 定义
function delay (fn, timeout) {
  return new Promise(resolve => {
    setTimeout(_ => {
      fn()
      resolve()
    }, timeout)
  })
}

//调用
delay(_ => console.log('foobar', 1000).then(_ => console.log('finished'))
```

### 多层回调

老语法：
``` js
function copyFile(src, dst, callback) {
  readFile(src, (err, content) => {
    if (err) {
      callback(err)
      return
    }

    writeFile(dst, content, err => {
      if (err) {
        callback(err)
        return
      }

      callback()
    })
  })
}

copyFile('...', '...', err => {
  if (err) {
    //...
    return
  }

  //...
})
```

新语法：
``` js
function capyFile (src, dst) {
  return readFile(src).then(content => {
    return writeFile(dst, content)
  })
}

copyFile('...', '...')
  .then(_ => console.log('finished'))
  .catch(err => console.error(err))
```



### 要点

* Promise一旦创建是不能不执行的
* 创建一个Promise，只能用一次，不能重复使用
* Promise的三个状态：pending -> fulfilled | rejected
* try/catch不能捕获Promise中的异常
* 链式调用



@page

## async和await

一种比Promise更好用的语法.

### 案例

Promise:
``` js
function capyFile (src, dst) {
  return readFile(src).then(content => {
    return writeFile(dst, content)
  })
}

copyFile('...', '...')
  .then(_ => console.log('finished'))
  .catch(err => console.error(err))
```

``` js
function async capyFile (src, dst) {
  const content = await readFile(src)
  writeFile(dst, content)
}

async function main () {
  try {
    await copyFile('...', '...')
    console.log('finished')
  } catch (err) {
    console.error(err)
  }
}
```

### 要点

* Promise和async/await的关系
* try/catch可以捕获await过程中的异常