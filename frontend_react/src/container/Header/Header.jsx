import React from 'react';
import {motion} from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper/AppWrap';
import './Header.scss';
import { FcBinoculars } from 'react-icons/fc';
import Map from '../../components/Map/Map';
import Skills from '../Skills/Skills';

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
    <div className=' main app__flex'>
      <div className='app__header app__flex'>
        <motion.div
          whileInView={{x: [-100, 0], opacity: [0, 1]}}
          transition={{duration: 0.5}}
          className='app__header-info'
        >
          <div className='app__header-badge'>
            <h1>Hello</h1>
            <div className='header-static-txt'>Hi, I'm <span>Stanislav Prokofjev</span>, a passionate frontend web developer from Tallinn, Estonia <a href='#contact'><FcBinoculars/></a>.
            <br/>I specialize in using modern technologies  to create engaging and responsive websites that deliver an exceptional user experience.</div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1]}}
          className='app__header-img'
        />
      </div>
    </div>
  );
}

export default AppWrap(Header, 'home');