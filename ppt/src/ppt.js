import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Catalog from './component/Catalog'
import Page from './component/Page'
import Box from './component/Box'

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
    const currIndex = parseInt(window.location.pathname.replace(/^\//, ''))

    if (currIndex >= 8 - 1) {
      return
    }

    this.router_.history.push('/' + (currIndex + 1))
  }

  goPrev() {
    const currIndex = parseInt(window.location.pathname.replace(/^\//, ''))

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
                '现代javascript相关概念',
                'ECMAScript是什么?',
                '未命名',
                'babel',
                '.babelrc'
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
                  src="https://github.com/typeerrorfeclass/home/raw/master/wechat.png"
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
              <h2 id="-javascript-">现代javascript相关概念</h2>
              <ul>
                <li>ECMAScript是什么？</li>
                <li>ES6、ES7、ES2015、ES2016……是什么？</li>
                <li>tc39是什么？</li>
                <li>stage0、stage1、stage2是什么？</li>
              </ul>
            </Page>
            <Page pageIndex={4}>
              <h2 id="ecmascript-">ECMAScript是什么?</h2>
              <h3 id="-">基本概念</h3>
              <p>
                ECMAScript是一种由Ecma国际（前身为欧洲计算机制造商协会）通过ECMA-262标准化的脚本程序设计语言。这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，但实际上后两者是ECMA-262标准的<span className="red">
                  实现和扩展
                </span>。
              </p>
              <h3 id="ecma-262">ECMA-262</h3>
              <p>
                <a href="https://www.ecma-international.org/publications/standards/Ecma-262.htm">
                  https://www.ecma-international.org/publications/standards/Ecma-262.htm
                </a>
              </p>
              <h3 id="-">历史背景</h3>
              <p>
                javascript在最初推广时，为了蹭java的热度，起名叫做javascript。但是由于&quot;java&quot;是Oracle公司持有的注册商标，javascript标准化之后，采用了ECMAScript这个名称。目前在正式场合统一称为ECMAScript。
              </p>
            </Page>
            <Page pageIndex={5}>
              <p>##</p>
            </Page>
            <Page pageIndex={6}>
              <h2 id="babel">babel</h2>
              <ul>
                <li>babel-cli</li>
                <li>
                  babel-preset<ul>
                    <li>babel-preset-env</li>
                  </ul>
                </li>
                <li>babel-plugin</li>
              </ul>
            </Page>
            <Page pageIndex={7}>
              <h2 id="-babelrc">.babelrc</h2>
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
            <Route exact path="/" render={_ => <Redirect to={'/0'} />} />
          </div>
        </Router>
      </div>
    )
  }
}
