import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Product from './Product'

function App() {
  return (
    <Router>
      <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Product />} />
      </Routes>
      </div>
    </Router>
    
  )
}

export default App
