import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Hello from './components/Hello.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Hello></Hello>
  </React.StrictMode>,
)
