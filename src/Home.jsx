import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='truck'>
      <div className='home-content'>
        <h1>Welcome to the Home page</h1>
        <p>Click the button below to go to the Products page</p>
        <Link to='/products' className='button'>
          Go to products
        </Link>

      </div>
      
    </div>
  )
}

export default Home
