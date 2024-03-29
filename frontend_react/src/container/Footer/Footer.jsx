import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap} from '../../wrapper/AppWrap';
import { MotionWrap } from '../../wrapper/MotionWrap';
import { client} from '../../client';
import './Footer.scss';
import Map from '../../components/Map/Map';
import SocialMedia from '../../components/Socialmedia/SocialMedia';
import MobileSocial from '../../components/MobileSocial/MobileSocial';

const Footer = () => {

  const [formData, setFormData] = useState({name: '', email: '', message:''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message} = formData;

  const handleChangeInput = (e) => {
    const {name, value } = e.target;

    setFormData({ ...formData, [name]: value})
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <div className='footer'>
      <div className='footer__container'>
      <div className='left-side'>
      <h2 className='footer__head-text app__flex'>Contact with me</h2>
        {!isFormSubmitted ? 
          <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type='text' placeholder='Your name' name='name' value={name} onChange={handleChangeInput}></input>
          </div>
          <div className='app__flex'>
            <input className='p-text' type='email' placeholder='Your email'  name='email' value={email} onChange={handleChangeInput}></input>
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your message'
              value={message}
              name="message"
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <button type='buttonp-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send message'}</button>
        </div>  
        :
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
        }

      </div>
      <div className='right-side'>
        <Map/>
      </div>
      </div>
      <div className='app__footer-cards app__flex'>
        <div className='app__footer-card'>
          <img src={images.gmail} alt='email'/>
          <a href='mailto:prokostas@gmail.com' className='p-text'>Prokostas@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.phoneCall} alt='mobile'/>
          <a href='tel: +37258373789' className='p-text'>+372 583 737 89</a>
        </div>
      </div>
      <div>
        <MobileSocial/>
      </div>
      <div className='copyright'>
        <p className='p-text'>@2022 Anilan</p>
        <p className='p-text'>All rights reserved</p>
      </div>
    </div>
  );
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact', 
  'app__greybg'
);