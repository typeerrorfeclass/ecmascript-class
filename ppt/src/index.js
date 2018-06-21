import React from 'react'
import ReactDOM from 'react-dom'
import PPT from './ppt'
import domMagic from './domMagic'

import './index.less'

ReactDOM.render(<PPT />, document.getElementById('reppt-container'), _ => {
  domMagic()
})
