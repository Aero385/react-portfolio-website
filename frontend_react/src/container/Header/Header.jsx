import React from 'react';
import {motion} from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper/AppWrap';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {

  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.5}}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='header-static-txt'>Hello, I am </div>
          <ul className='header-dynamic-txt'>
            <li><span>Stanislav</span></li>
            <li><span>Developer</span></li>
            <li><span>Freelancer</span></li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='app__header-img'
      >
        <img src={images.St1}  alt='profile_bg'/>
        <motion.img
          whileInView={{ scale: [0, 1]}}
          transition={{duration: 1, ease: 'easeInOut'}}
          className='overlay_circle'
          src={images.circle}
          alt='profile-circle'
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.html, images.css ,images.javascript, images.react, images.git, images.api, images.redux, images.sass, images.typescript].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle'/>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, 'home');