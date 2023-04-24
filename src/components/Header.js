import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='Head'>
        <div className='Hackerquiz'> 
        <h1>Hacker<span>Quiz</span></h1>
        </div>
        <div className='headerelement'>
            Products
        </div>
        <div className='headerelement'>
            Products
        </div>
        <div className='headerelement'>
            Solution
        </div>
        <div className='headerelement'>
            Pricing
        </div>
        <div className='Signin'>
            <li className='signin1'>For Candiates</li>
            <li><button className='btn'>Request demo</button></li>
            <li><button className='btn1'>Sign Up</button></li>
        </div>
    </div>
  )
}

export default Header