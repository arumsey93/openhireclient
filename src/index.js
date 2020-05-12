import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import OpenHire from './components/OpenHire'
import './index.css'

<meta name="viewport" content="width=device-width, initial-scale=1.0" />


ReactDOM.render(
  <Router>
      <OpenHire />
  </Router>
  , document.getElementById('root'))