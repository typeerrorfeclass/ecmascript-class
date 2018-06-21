import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Page from './component/Page'
import Box from './component/Box'

export default class PPT extends React.Component {
  static displayName() {
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

    if (currIndex >= 5 - 1) {
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
            <Page pageIndex={0}>
              <Box data={{ className: 'cover' }}>
                <h1 id="-javascript-">现代javascript课程</h1>
                <h4 id="-typeerror">方怀南@TypeError</h4>
              </Box>
            </Page>
            <Page pageIndex={1}>
              <h2 id="typeerror-">TypeError课程介绍</h2>
              <p>
                请访问:{' '}
                <a href="https://github.com/typeerrorfeclass/home">
                  https://github.com/typeerrorfeclass/home
                </a>
              </p>
            </Page>
            <Page pageIndex={2}>
              <h2 id="-javascript">现代javascript</h2>
              <ul>
                <li>ECMAScript是什么？</li>
                <li>ES6、ES7、ES2015、ES2016……是什么？</li>
                <li>tc39是什么？</li>
                <li>stage0、stage1、stage2是什么？</li>
              </ul>
            </Page>
            <Page pageIndex={3}>
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
            <Page pageIndex={4}>
              <h2 id="-babelrc">.babelrc</h2>
              <pre>
                <code className="language-json">{`{
  &quot;presets&quot;: [
    [
      &quot;env&quot;,
      {
        &quot;targets&quot;: {
          &quot;browsers&quot;: [&quot;last 2 versions&quot;, &quot;ie &gt;= 10&quot;]
        },
        &quot;debug&quot;: false
      }
    ]
  ],
  &quot;plugins&quot;: [
    &quot;transform-class-properties&quot;,
    &quot;transform-decorators-legacy&quot;,

    [
      &quot;transform-react-jsx&quot;,
      {
        &quot;pragma&quot;: &quot;React.createElement&quot;
      }
    ],

    [
      &quot;transform-runtime&quot;,
      {
        &quot;helpers&quot;: true,
        &quot;polyfill&quot;: true,
        &quot;regenerator&quot;: true,
        &quot;moduleName&quot;: &quot;babel-runtime&quot;
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
