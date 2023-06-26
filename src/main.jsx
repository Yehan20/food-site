import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import { Global } from './styled/global'
import Header from './components/Header'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Global/>
      <Router>
        <Header/>
        <App />
        <Footer/>
      </Router>
  </React.StrictMode>,
)
