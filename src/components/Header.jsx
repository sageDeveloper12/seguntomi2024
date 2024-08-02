import React from 'react'
import { Link } from 'react-router-dom'
import { BsFlower1 } from 'react-icons/bs'
import {motion} from 'framer-motion'

const titleVariant = {
  hidden: {
    y: '-100vw',
    opacity: 0
    
  },
  visible:{ 
    y:0,
    opacity: 1,
    transition: {
    type: 'spring',
    stiffness: 50,
    delay: 0.5,
  }
  }
}
const navVariant1 = {
  hidden: {
    x: '-100vw',
    opacity: 0
    
  },
  visible:{ 
    x:0,
    opacity: 1,
    transition: {
    type: 'spring',
    stiffness: 50,
    delay: 1,
  }
  }
}
const navVariant2 = {
  hidden: {
    x: '100vw',
    opacity: 0
    
  },
  visible:{ 
    x:0,
    opacity: 1,
    transition: {
    type: 'spring',
    stiffness: 50,
    delay: 1,
  }
  }
}

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__wrapper">
        <BsFlower1 className='header__icon1'/>
        <div className="text">
          <motion.h1
          variants={titleVariant}
          initial = 'hidden'
          animate = 'visible'
          >OLUWATOMI & OLUWASEGUN</motion.h1>
        </div>       
        <div className="nav__container">
        <ul>
          <motion.li
          variants={navVariant1}
          initial = 'hidden'
          animate = 'visible'
          ><Link to='/upload'>Upload</Link></motion.li>
          <motion.li
          variants={navVariant2}
          initial = 'hidden'
          animate = 'visible'
          ><Link to ='/gallery'>Gallery</Link></motion.li>
        </ul>
      </div>  
      </div>
    </div>
  )
}

export default Header