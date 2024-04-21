import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Demo from './components/Demo'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <main>
        <div className="main">
          <div className='gradient' />
        </div>

        <div className="app">
          <Hero />
          <Demo />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App

