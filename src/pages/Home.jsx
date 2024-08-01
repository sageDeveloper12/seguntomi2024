

import image1 from '/person1.jpg'
import image2 from '/person2.jpg'
import flower1 from '/flower.png'
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion} from 'framer-motion'

const containerVariants = {
  hidden: {
    x: '-100vw',
    opacity: 0
    
  },
  visible:{ 
    x:0,
    opacity: 1,
    transition: {
    type: 'spring',
    stiffness: 500,
    damping: 4,
    delay: 0.5,
  }
  }
}
const containerVariants2 = {
  hidden: {
    x: '100vw',
    opacity: 0
    
  },
  visible:{ 
    x:0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness:500,
      damping: 4,
      delay:0.5,
    }
  }
}

const textVariant = {
  hidden:{
    opacity: 0,
    x:["10px", "-10px"]
  },

  visible:{
    opacity: 1,
    x:0,
    transition: {
    type: 'spring',
    damping:2,
    delay: 3
  }
}
}
const textVariant2 = {
  hidden:{
    opacity: 0,
    x:["10px", "-10px"]
  },

  visible:{
    opacity: 1,
    x:0,
    transition: {
    type: 'spring',
    damping:2,
    delay: 3.5
  }
}
}

const Home = () => {
  
  
  
  return (
    <div className="home__container">
       <motion.div 
       className="image__container"
       variants={containerVariants}
       initial = "hidden"
       animate ="visible"
       >
          <img className='main__image' src={image1} alt="" />
          <img src={flower1} alt="" className="flower1 flower" />
       </motion.div>
       <div className="text__container">
       <motion.div
          className="icon"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1], color:['#ffc0cb','#ff0000','#ffc0cb'] }}
          transition={{ 
            duration: 0.6, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut"
          }}
        >
          <FaHeart />
        </motion.div>
          <motion.h2
          variants={textVariant}i
          initial = 'hidden'
          animate = 'visible'
          >CELEBRATION OF LOVE</motion.h2>
          <motion.p
          variants={textVariant2}
          initial = 'hidden'
          animate = 'visible'
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nostrum sequi blanditiis possimus 
            perferendis voluptate facere maiores quam facilis laborum.</motion.p>
            <Link to='/events'><button className='btn'>Events</button></Link>
       </div>
       <motion.div 
       className="image__container"
       variants={containerVariants2}
       initial = "hidden"
       animate ="visible"
       >
          <img src={image2} alt="" className='main__image' />
       </motion.div>
    </div>
  )
}

export default Home