import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import OpenHire from './components/OpenHire'
import './index.css'

ReactDOM.render(
  <Router>
      <OpenHire />
  </Router>
  , document.getElementById('root'))