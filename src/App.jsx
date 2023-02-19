/* eslint-disable quotes */
import React from 'react'
import Navbar from './components/Navbar/Navbar' // Import
import Footer from './components/Footer/Footer' // Import
import MainBody from './components/MainBody/MainBody' // Import

import './App.css'

function App() {
  return (
    <div className='App'>
      {/* <h1>sf</h1> */}
      <div className='header'>
        <Navbar />
      </div>

      <div className='Main'>
        <MainBody />
      </div>
      {/* <MainBody /> */}

      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default App
