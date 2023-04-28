import React, { useState } from 'react'
const NavBar= React.lazy(()=>import('./components/NavBar/NavBar'))
const Home= React.lazy(()=>import('./components/Home/Home'))
const Footer= React.lazy(()=>import('./components/Footer/Footer'))
const Contact= React.lazy(()=>import('./components/Contact/Contact'))
const Services= React.lazy(()=>import('./components/Services/Services'))
const About= React.lazy(()=>import('./components/About/About'))
import './App.css'

function App() {
  return (
    <div className="vision">
      <NavBar/>
      <div className='container_content'>
        <Home/>
        <About/>
        <Services/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
