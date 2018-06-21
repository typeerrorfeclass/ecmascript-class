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

  render () {
    const { items } = this.props

    const warpStyle = {
      marginTop: 7,
      lineHeight: 2,
      maxHeight: 400,
      overflow: 'auto',
      color: '#CC0033'
    }

    return <div>
      <Popup
        closeBtn
        closeOnEsc
        open={this.state.open}
        position='centerCenter'
        onClose={this.close.bind(this)}>
        <div style={warpStyle}>
          <h3 style={{
            margin: 0
          }}>目录</h3>
          <ul>
            {
              items.map((item, index) => <li key={`${index}-${item}`}>
                <Link to={`/${index}`} style={{
                  textDecoration: 'none',
                  color: '#333333'
                }}>{item}</Link>
              </li>)
            }
          </ul>
        </div>
      </Popup>
    </div>
  }
}
