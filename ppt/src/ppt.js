import React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Catalog from './component/Catalog'
import Page from './component/Page'
import Box from './component/Box'
import image0 from './img/equality.png'
import image1 from './img/protochain.jpg'

export default class PPT extends React.Component {
  static get displayName() {
    return 'PPT'
  }

  componentDidMount() {
    this.onKeyDown_ = this.onKeyDown.bind(this)
    document.addEventListener('keydown', this.onKeyDown_)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown_)
    this.onKeyDown_ = null
  }

  onKeyDown(evt) {
    const code = evt.code.toLowerCase()

    if (code === 'space' || code === 'arrowright' || code === 'arrowdown') {
      this.goNext()
    } else if (code === 'arrowleft' || code === 'arrowup') {
      this.goPrev()
    }
  }

  goNext() {
    let currIndex = parseInt(window.location.hash.replace('#/', ''))
    if (isNaN(currIndex)) {
      currIndex = -1
    }

    if (currIndex >= 33 - 1) {
      return
    }

    this.router_.history.push('/' + (currIndex + 1))
  }

  goPrev() {
    let currIndex = parseInt(window.location.hash.replace('#/', ''))
    if (isNaN(currIndex)) {
      currIndex = 1
    }

    if (currIndex === 0) {
      return
    }

    this.router_.history.push('/' + (currIndex - 1))
  }

  render() {
    return (
      <div className="ppt">
        <Router
          ref={c => {
            this.router_ = c
          }}>
          <div className="pages">
            <Catalog
              items={[
                '首页',
                'TypeError课程介绍',
                '课程内容',
                '未命名',
                '常见问题',
                'ECMAScript是什么?',
                'ES6、ES2015……是什么?',
                'tc39是什么?',
                '未命名',
                'babel基本概念',
                'babel的基本使用',
                'babel-preset-env',
                'babel-preset-env配置案例',
                'babel配置文件',
                '只转换语法就够了吗?',
                'polyfill和transform-runtime',
                '未命名',
                'let和const',
                '解构赋值',
                '模板字符串',
                '正则表达式的s修饰符',
                'isFinite和isNaN',
                'isSafeInteger',
                '未命名',
                '属性的简洁表示法',
                '属性名表达式',
                '函数的name属性',
                'Object.is',
                'Object.assign',
                '__proto__',
                'keys、values、entries',
                'getOwnPropertyDescriptor',
                '展开运算符'
              ]}
            />
            <Page pageIndex={0}>
              <Box data={{ className: 'cover' }}>
                <h1 id="-javascript">现代javascript</h1>
                <h4 id="-typeerror">方怀南@TypeError</h4>
              </Box>
            </Page>
            <Page pageIndex={1}>
              <h2 id="typeerror-">TypeError课程介绍</h2>
              <h3 id="-">访问地址</h3>
              <ul>
                <li>
                  课程主页:{' '}
                  <a href="https://github.com/typeerrorfeclass/home">
                    https://github.com/typeerrorfeclass/home
                  </a>
                </li>
                <li>
                  YY直播间: <a href="https://0x9.me/j4v80">34592948</a>
                </li>
              </ul>
              <h3 id="-">联系方式</h3>
              <p>
                <img
                  src="https://typeerrorfeclass.github.io/home/wechat.png"
                  alt="微信二维码"
                />
              </p>
            </Page>
            <Page pageIndex={2}>
              <h2 id="-">课程内容</h2>
              <h3 id="-">课程模块</h3>
              <ul>
                <li>现代javascript相关概念</li>
                <li>babel的原理和使用</li>
                <li>常用新语法学习</li>
              </ul>
              <h3 id="-">相关书籍</h3>
              <ul>
                <li>《ECMAScript 6 入门》阮一峰</li>
              </ul>
            </Page>
            <Page pageIndex={3}>
              <Box data={{ className: 'cover' }}>
                <h1 id="ecmascript">ECMAScript</h1>
              </Box>
            </Page>
            <Page pageIndex={4}>
              <h2 id="-">常见问题</h2>
              <ul>
                <li>ECMAScript是什么?</li>
                <li>ES6、ES7、ES2015、ES2016……是什么?</li>
                <li>tc39是什么?</li>
                <li>stage0、stage1、stage2是什么?</li>
              </ul>
            </Page>
            <Page pageIndex={5}>
              <h2 id="ecmascript-">ECMAScript是什么?</h2>
              <h3 id="-">基本概念</h3>
              <p>
                ECMAScript是一种由Ecma国际(前身为欧洲计算机制造商协会)通过ECMA-262标准化的脚本程序设计语言.
                这种语言在万维网上应用广泛, 它往往被称为JavaScript或JScript,
                但实际上后两者是ECMA-262标准的<span className="red">
                  实现和扩展
                </span>.
              </p>
              <h3 id="ecma-262">ECMA-262</h3>
              <p>
                <a href="https://www.ecma-international.org/publications/standards/Ecma-262.htm">
                  https://www.ecma-international.org/publications/standards/Ecma-262.htm
                </a>
              </p>
              <h3 id="-">历史背景</h3>
              <p>
                javascript在最初推广时, 为了蹭java的热度, 起名叫做javascript.
                但是由于&quot;java&quot;是Oracle公司持有的注册商标,
                javascript标准化之后, 采用了ECMAScript这个名称.
                目前在正式场合统一称为ECMAScript.
              </p>
            </Page>
            <Page pageIndex={6}>
              <h2 id="es6-es2015-">ES6、ES2015……是什么?</h2>
              <ul>
                <li>
                  ES6的第一个版本, 在2015年6月发布, 正式名称就是《ECMAScript
                  2015标准》(简称 ES2015).
                </li>
                <li>
                  2016年6月, 小幅修订的《ECMAScript 2016标准》(简称 ES2016)发布,
                  这个版本可以看作是 ES6.1 版.
                </li>
                <li>
                  ES6 既是一个历史名词, 也是一个泛指,
                  含义是5.1版以后的JavaScript的下一代标准,
                  涵盖了ES2015、ES2016、ES2017等等.
                </li>
              </ul>
            </Page>
            <Page pageIndex={7}>
              <h2 id="tc39-">tc39是什么?</h2>
              <h3 id="-">介绍</h3>
              <p>
                任何人都可以向标准委员会(又称TC39委员会)提案, 要求修改语言标准.
              </p>
              <p>
                一种新的语法从提案到变成正式标准, 需要经历五个阶段.
                每个阶段的变动都需要由 TC39 委员会批准.
              </p>
              <pre>
                <code>{`Stage 0 - Strawman(展示阶段)
Stage 1 - Proposal(征求意见阶段)
Stage 2 - Draft(草案阶段)
Stage 3 - Candidate(候选人阶段)
Stage 4 - Finished(定案阶段)`}</code>
              </pre>
              <p>
                一个提案只要能进入 Stage 2,
                就差不多肯定会包括在以后的正式标准里面.
              </p>
              <h3 id="tc39-">tc39官网</h3>
              <p>
                <a href="http://www.ecma-international.org/memento/TC39.htm">
                  http://www.ecma-international.org/memento/TC39.htm
                </a>
              </p>
            </Page>
            <Page pageIndex={8}>
              <Box data={{ className: 'cover' }}>
                <h1 id="babel">babel</h1>
              </Box>
            </Page>
            <Page pageIndex={9}>
              <h2 id="babel-">babel基本概念</h2>
              <h3 id="babel-">babel是什么?</h3>
              <p>
                将新语法转换为ES5老语法的<span className="red">转译器</span>(transpiler).
              </p>
              <h3 id="-">相关模块</h3>
              <ul>
                <li>babel-core: babel的核心</li>
                <li>babel-cli: babel的命令行工具</li>
                <li>babel-plugin: 语法插件</li>
                <li>babel-preset: 语法插件的集合(语法的集合就是语言的版本)</li>
              </ul>
              <h3 id="babel-">babel官网</h3>
              <p>
                <a href="http://babeljs.io/">http://babeljs.io/</a>
              </p>
            </Page>
            <Page pageIndex={10}>
              <h2 id="babel-">babel的基本使用</h2>
              <h3 id="-">安装</h3>
              <pre>
                <code className="language-sh">{`npm i babel-cli -g`}</code>
              </pre>
              <h3 id="-">基本使用</h3>
              <pre>
                <code className="language-sh">{`cd demo/babel-basic-using
npm i
babel es6.js`}</code>
              </pre>
            </Page>
            <Page pageIndex={11}>
              <h2 id="babel-preset-env">babel-preset-env</h2>
              <h3 id="-">强烈推荐</h3>
              <p>
                babel-preset-env是babel官方推荐, 换句话说就是你最好永远用它,
                不要用别的preset.
              </p>
              <h3 id="-">好处</h3>
              <ul>
                <li>根据配置可以生成兼容不同版本浏览器或者node环境的代码.</li>
                <li>
                  可转译所有的新语法, 也可以根据环境的兼容性, 不转译某些语法.
                </li>
              </ul>
              <h3 id="-">相关资料</h3>
              <p>
                <a href="http://2ality.com/2017/02/babel-preset-env.html">
                  http://2ality.com/2017/02/babel-preset-env.html
                </a>
              </p>
            </Page>
            <Page pageIndex={12}>
              <h2 id="babel-preset-env-">babel-preset-env配置案例</h2>
              <h3 id="-ie10">兼容上两个版本, IE10</h3>
              <pre>
                <code className="language-json">{`{
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
}`}</code>
              </pre>
              <h3 id="-chrome-65">兼容Chrome 65</h3>
              <pre>
                <code className="language-json">{`{
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
`}</code>
              </pre>
            </Page>
            <Page pageIndex={13}>
              <h2 id="babel-">babel配置文件</h2>
              <h3 id="babel-">babel使用的配置文件</h3>
              <p>
                babel-cli默认使用当前目录下的.babelrc文件作为配置文件,
                采用json格式.
              </p>
              <h3 id="-">不使用配置文件</h3>
              <p>
                使用<code>{`--no-babelrc`}</code>选项可以让babel-cli不是用配置文件,
                此时需要使用命令行参数配置babel-cli.
              </p>
              <h3 id="-">案例</h3>
              <pre>
                <code className="language-json">{`{
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
`}</code>
              </pre>
            </Page>
            <Page pageIndex={14}>
              <h2 id="-">只转换语法就够了吗?</h2>
              <h3 id="-">请看这段代码</h3>
              <pre>
                <code className="language-js">{`const prom = new Promise((resolve, reject) => {
  setTimeout(_ => resolve(), 1000)
})`}</code>
              </pre>
              <h3 id="-">转换后的代码</h3>
              <pre>
                <code className="language-js">{`"use strict";

var prom = new Promise(function (resolve, reject) {
  setTimeout(function (_) {
    return resolve();
  }, 1000);
});`}</code>
              </pre>
            </Page>
            <Page pageIndex={15}>
              <h2 id="polyfill-transform-runtime">
                polyfill和transform-runtime
              </h2>
              <h3 id="babel-polyfill">babel-polyfill</h3>
              <p>
                先于业务代码加载到浏览器中的一段脚本, 用ES5实现的版本,
                补充浏览器中缺乏的全局对象/类型/函数等新特性.
              </p>
              <h3 id="babel-plugin-transform-runtime">
                babel-plugin-transform-runtime
              </h3>
              <p>babel-polyfill很大.</p>
              <p>不想污染全局, 比如不想在window添加字段.</p>
              <p>
                在babel转译过程中, 在使用了新特性的代码文件头部添加<code>{`require`}</code>语句,
                将ES5实现版本引用到业务代码中. 使用什么特性, 就引用什么,
                并且不会污染全局.
              </p>
            </Page>
            <Page pageIndex={16}>
              <Box data={{ className: 'cover' }}>
                <h1 id="-">常用新语法</h1>
              </Box>
            </Page>
            <Page pageIndex={17}>
              <h2 id="let-const">let和const</h2>
              <p>
                为了规避var关键字的“变量作用域提升”问题而产生的定义变量语法.
              </p>
              <h3 id="-">要点</h3>
              <ul>
                <li>
                  什么是作用域提升?let定义的变量,
                  其作用域与用var定义的变量有什么区别?
                </li>
                <li>闭包传递时, 与用var定义的变量有什么区别?</li>
                <li>const到底指的是谁不能变?</li>
              </ul>
            </Page>
            <Page pageIndex={18}>
              <h2 id="-">解构赋值</h2>
              <pre>
                <code className="language-js">{`const [a, b] = [1, 2]
console.log(a, b)

const [a, b, c = 3] = [1, 2]
console.log(a, b, c)

const { a, b } = { a: 1, b: 2 }
console.log(a, b)

const { a: x, b } = { a: 1, b: 2 }
console.log(a, b, x)`}</code>
              </pre>
            </Page>
            <Page pageIndex={19}>
              <h2 id="-">模板字符串</h2>
              <h3 id="-">着重强调</h3>
              <p>不要再用“+”号组合字符串了！很业余, 很容易出错！</p>
              <h3 id="-">案例</h3>
              <pre>
                <code className="language-js">{`const foo = '3'
const bar = foo + 2 + 1
console.log(bar) // 这里的bar等于什么?`}</code>
              </pre>
            </Page>
            <Page pageIndex={20}>
              <h2 id="-s-">正则表达式的s修饰符</h2>
              <p>
                传统正则表达式中的“.”符, 不能匹配换行符,
                使用s修饰符之后“.”可以匹配换行符.
              </p>
              <h3 id="-">案例</h3>
              <pre>
                <code className="language-js">{`const str = 'Hello \nworld!'
const reg1 = /Hello.+world!/
const reg2 = /Hello.+world!/s

reg1.test(str)
reg2.test(str)`}</code>
              </pre>
            </Page>
            <Page pageIndex={21}>
              <h2 id="isfinite-isnan">isFinite和isNaN</h2>
              <p>isFinite判断是不是有限数值.</p>
              <p>isNaN判断是不是NaN.</p>
              <h3 id="-">要点</h3>
              <ul>
                <li>什么是Infinity?</li>
                <li>什么是NaN?</li>
              </ul>
            </Page>
            <Page pageIndex={22}>
              <h2 id="issafeinteger">isSafeInteger</h2>
              <p>
                JavaScript
                能够准确表示的整数范围在-2^53到2^53之间(不含两个端点),
                超过这个范围, 无法精确表示这个值.
                isSafeInteger用来判断一个数是不是落在这个范围内.
              </p>
              <h3 id="-">要点</h3>
              <ul>
                <li>Number.MIN_SAFE_INTEGER</li>
                <li>Number.MAX_SAFE_INTEGER</li>
              </ul>
              <h3 id="-">扩展</h3>
              <ul>
                <li>
                  每天下载300万次的库(看源码):{' '}
                  <a href="https://www.npmjs.com/package/is-odd">is-odd</a>
                </li>
              </ul>
            </Page>
            <Page pageIndex={23}>
              <Box data={{ className: 'cover' }}>
                <h1 id="object-">Object专题</h1>
              </Box>
            </Page>
            <Page pageIndex={24}>
              <h2 id="-">属性的简洁表示法</h2>
              <h3 id="-">案例</h3>
              <h4 id="-">老语法</h4>
              <pre>
                <code className="language-js">{`const foo = 1
const bar = 2

const obj = {
  foo: foo,
  bar: bar
}`}</code>
              </pre>
              <h4 id="-">新语法</h4>
              <pre>
                <code className="language-js">{`const foo = 1
const bar = 2

const obj = { foo, bar }`}</code>
              </pre>
            </Page>
            <Page pageIndex={25}>
              <h2 id="-">属性名表达式</h2>
              <h3 id="-">案例</h3>
              <h4 id="-">老语法</h4>
              <pre>
                <code className="language-js">{`function fn (foo, bar) {
  const ret = {}

  ret[foo] = 'foo'
  ret[bar] = 'bar'

  return ret
}`}</code>
              </pre>
              <h4 id="-">新语法</h4>
              <pre>
                <code className="language-js">{`function fn (foo, bar) {
  return {
    [foo]: 'foo',
    [bar]: 'bar'
  }
}`}</code>
              </pre>
            </Page>
            <Page pageIndex={26}>
              <h2 id="-name-">函数的name属性</h2>
              <p>Function对象的name属性, 可以获得函数名.</p>
              <h3 id="-">应用场景</h3>
              <p>调试工具, 日志打印等.</p>
              <h3 id="-">案例</h3>
              <pre>
                <code className="language-js">{`function foobar () {
  return {}
}

function invoke (fn) {
  console.log(fn.name)
  return fn()
}`}</code>
              </pre>
            </Page>
            <Page pageIndex={27}>
              <h2 id="object-is">Object.is</h2>
              <p>一种新的相等算法的实现.</p>
              <p>
                <code>{`==`}</code>和<code>{`===`}</code>的缺点:{' '}
              </p>
              <ul>
                <li>
                  <code>{`==`}</code>会自动转换类型
                </li>
                <li>
                  <code>{`===`}</code>不认为NaN和NaN相等, 认为+0和-0相等
                </li>
              </ul>
              <h3 id="-">要点</h3>
              <ul>
                <li>“Same-value equality”(同值相等)</li>
              </ul>
              <h3 id="-">扩展</h3>
              <p>
                <code>{`==`}</code>号的等值表(如果没有信心记住, 就不要用<code>{`==`}</code>号)
              </p>
              <div className="plugin-image">
                <img src={image0} />
              </div>
            </Page>
            <Page pageIndex={28}>
              <h2 id="object-assign">Object.assign</h2>
              <p>可以用来浅复制或者浅合并对象.</p>
              <h3 id="-">案例</h3>
              <pre>
                <code className="language-js">{`const foo = { a: 1, b: 2 }
const fee = { c: 3, d: 4 }

// 复制
const bar = Object.assign({}, foo)

// 合并
const baz = Object.assign({}, foo, fee)`}</code>
              </pre>
              <h3 id="-">要点</h3>
              <ul>
                <li>什么是“浅”, 什么是“深”?</li>
              </ul>
              <h3 id="-">扩展</h3>
              <ul>
                <li>面试题: 如何深拷贝一个对象?</li>
              </ul>
            </Page>
            <Page pageIndex={29}>
              <h2 id="__proto__">__proto__</h2>
              <p>
                指向对象原型的指针, 只有浏览器承诺支持, 其他环境不一定,
                建议不要直接使用.
              </p>
              <p>
                相关知识点: Object.setPrototypeOf()和Object.getPrototypeOf()
              </p>
              <h3 id="-">扩展</h3>
              <p>原型链</p>
              <div className="plugin-image">
                <img src={image1} />
              </div>
            </Page>
            <Page pageIndex={30}>
              <h2 id="keys-values-entries">keys、values、entries</h2>
              <ul>
                <li>keys用来找到对象自身可枚举的属性名</li>
                <li>values用来找到对象自身可枚举的属性值</li>
                <li>entries把对象转化为一个key-value数组</li>
              </ul>
              <h3 id="-">扩展</h3>
              <ul>
                <li>各种循环遍历对象的方法</li>
                <li>面试题: 把字符串/数组/类对象传入Object.keys会返回什么?</li>
              </ul>
            </Page>
            <Page pageIndex={31}>
              <h2 id="getownpropertydescriptor">getOwnPropertyDescriptor</h2>
              <p>
                对象的每个属性都有一个描述对象(Descriptor),
                用来控制该属性的行为.
                Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象.
              </p>
              <h3 id="-">案例</h3>
              <pre>
                <code className="language-js">{`let obj = { foo: 123 };
Object.getOwnPropertyDescriptor(obj, 'foo')
//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }`}</code>
              </pre>
              <h3 id="-">扩展</h3>
              <h4 id="-">可枚举性</h4>
              <p>
                描述对象的enumerable属性, 称为“可枚举性”, 如果该属性为false,
                就表示某些操作会忽略当前属性.
              </p>
              <ul>
                <li>for...in循环: 只遍历对象自身的和继承的可枚举的属性.</li>
                <li>Object.keys(): 返回对象自身的所有可枚举的属性的键名.</li>
                <li>JSON.stringify(): 只串行化对象自身的可枚举的属性.</li>
                <li>
                  Object.assign(): 忽略不可枚举的属性,
                  只拷贝对象自身的可枚举的属性.
                </li>
              </ul>
            </Page>
            <Page pageIndex={32}>
              <h2 id="-">展开运算符</h2>
              <p>使用...符号, 可以将对象“展开”.</p>
              <h3 id="-">案例</h3>
              <pre>
                <code className="language-js">{`const foo = { a: 1, b: 2 }
const bar = {
  ...foo,
  c: 3
}

console.log(bar)`}</code>
              </pre>
              <h4 id="-">扩展</h4>
              <p>es6中省略号的妙用.</p>
              <p>
                建议: 请编写地道的js代码, 尤其是在github上,
                不要一眼看上去就很业余.
              </p>
              <pre>
                <code className="language-jsx">{`// 代替arguments
function fn (...params) {
  console.log(params)
}

// 表示剩余参数
function fn (a, b, ...otherParams) {
  console.log(otherParams)
}

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
}`}</code>
              </pre>
            </Page>
            <Route exact path="/" render={_ => <Redirect to={'/0'} />} />
          </div>
        </Router>
      </div>
    )
  }
}
