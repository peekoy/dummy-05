import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './navbar/navbar'
import Hero from './hero/hero'
import Content from './content/content'
import './css/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Content />
  </React.StrictMode>,
)
