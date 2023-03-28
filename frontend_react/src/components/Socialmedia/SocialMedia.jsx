import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './SocialMedia.scss';

export const SocialMedia = () => {
  const linkedinRef = useRef(null);
  const facebookRef = useRef(null);
  const instagramRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(linkedinRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });
    VanillaTilt.init(facebookRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });
    VanillaTilt.init(instagramRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });
  }, []);

  return (
    <div className='app__social'>
      <div ref={linkedinRef}>
        <a className='linkedin' href='https://www.linkedin.com/in/stanislav-prokofjev-a25005221/'>
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
      </div>
      <div ref={facebookRef}>
        <a className='facebook' href='https://www.facebook.com/profile.php?id=100089577668613'>
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
      </div>
      <div ref={instagramRef}>
        <a className='instagram' href='https://www.instagram.com/prokofjev_stas/'>
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
