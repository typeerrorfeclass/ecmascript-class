import React from 'react'
import Popup from 'react-poppop'
import { Link } from 'react-router-dom'

export default class Catalog extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }
  }

  open () {
    this.setState({ open: true })
  }

  close () {
    this.setState({ open: false })
  }

  componentDidMount () {
    this.onKeyDown_ = this.onKeyDown.bind(this)
    document.addEventListener('keydown', this.onKeyDown_)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.onKeyDown_)
    this.onKeyDown_ = null
  }

  onKeyDown (evt) {
    const code = evt.code.toLowerCase()

    if (code === 'f2') {
      this.open()
    }
  }

  renderContent (items) {
    const warpStyle = {
      margin: 0,
      padding: 0,
      color: '#CC0033',
      height: 500,
      overflow: 'hidden'
    }

    const titleStyle = {
      margin: 0,
      padding: 0,
      height: 48,
      lineHeight: '48px'
    }

    const listWrapStyle = {
      margin: 0,
      padding: 0,
      height: 444,
      lineHeight: 2,
      overflow: 'auto'
    }

    const linkStyle = {
      textDecoration: 'none',
      color: '#333333'
    }

    return <div style={warpStyle}>
      <h3 style={titleStyle}>目录</h3>
      <div style={listWrapStyle}>
        <ol>
          {
            items.map((item, index) => <li key={`${index}-${item}`}>
              <Link to={`/${index}`} style={linkStyle}>{item}</Link>
            </li>)
          }
        </ol>
      </div>
    </div>
  }

  render () {
    const { items } = this.props

    return <div>
      <Popup
        closeOnEsc
        open={this.state.open}
        position='centerCenter'
        onClose={this.close.bind(this)}
        contentStyle={{ overflow: 'hidden' }}>
        {this.renderContent(items)}
      </Popup>
    </div>
  }
}
