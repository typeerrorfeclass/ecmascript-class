import React from 'react'
import { Route } from 'react-router-dom'
import hljs from 'highlight.js'

export default class Page extends React.Component {
  static get displayName () {
    return 'Page'
  }

  componentDidMount () {
    const { pageIndex } = this.props

    const codeBlocks = document.querySelectorAll(`#page-${pageIndex} pre code`)
    codeBlocks.forEach(block => hljs.highlightBlock(block))
  }

  componentDidUpdate () {
    const { pageIndex } = this.props

    const codeBlocks = document.querySelectorAll(`#page-${pageIndex} pre code`)
    codeBlocks.forEach(block => hljs.highlightBlock(block))
  }

  render () {
    const { props } = this
    const { pageIndex } = props

    const ContentComponent = _ => {
      return <div className='page' id={`page-${pageIndex}`}>
        {props.children}
      </div>
    }

    return <Route
      path={`/${pageIndex}`}
      key={`/${pageIndex}`}
      component={ContentComponent} />
  }
}
