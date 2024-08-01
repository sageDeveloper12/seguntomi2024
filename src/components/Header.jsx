import React from 'react'
import { Link } from 'react-router-dom'
import { BsFlower1 } from 'react-icons/bs'

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__wrapper">
        <BsFlower1 className='header__icon1'/>
        <div className="text">
          <h1>OLUWATOMI & OLUWASEGUN</h1>
        </div>       
        <div className="nav__container">
        <ul>
          <li><Link to='/upload'>Upload</Link></li>
          <li><Link to ='/gallery'>Gallery</Link></li>
        </ul>
      </div>  
      </div>
    </div>
  )
}

export default Header