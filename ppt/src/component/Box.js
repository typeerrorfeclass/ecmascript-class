import React from 'react'

export default class Box extends React.Component {
  static get displayName () {
    return 'Box'
  }

  static get defaultProps () {
    return {
      data: {}
    }
  }

  render () {
    const { props } = this
    const { data, children } = props
    const { style, className } = data

    return <div style={style} className={className}>
      {children}
    </div>
  }
}
