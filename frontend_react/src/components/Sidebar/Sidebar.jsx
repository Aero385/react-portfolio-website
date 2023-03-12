import React, { useState } from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const links = ['home', 'about', 'work', 'skills', 'contact'];
  const im = [
    <i className="fa fa-home fa-2x" aria-hidden="true"></i>,
    <i className="fa fa-info-circle fa-2x" aria-hidden="true"></i>,
    <i className="fa fa-briefcase fa-2x" aria-hidden="true"></i>,
    <i className="fa fa-cogs fa-2x" aria-hidden="true"></i>,
    <i className="fa fa-mobile fa-3x" aria-hidden="true"></i>
  ];

  const linkItems = links.map((link, index) => {
    return {
      link: link,
      icon: im[index],
      isActive: activeLink === link,
      onClick: () => setActiveLink(link),
    };
  });


  
  return (
    <>
    <div className='app__sidebar'>
      <ul className='app__sidebar-links'>
        {linkItems.map((item) => (
          <li 
            key={`link-${item.link}`}
            className={item.isActive ? 'active' : ''}
            onClick={item.onClick}
          >
            <a href={`#${item.link}`}>
              <span className='sidebar-icon'>
                {item.icon}
              </span>
            </a>
          </li>
        ))}
        <div className='indicator'></div>
      </ul>
    </div>
  </>
  );
};

export default Sidebar;





