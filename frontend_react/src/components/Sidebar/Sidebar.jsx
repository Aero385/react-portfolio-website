import React, { useState, useEffect, useRef } from 'react';
import './Sidebar.scss';

const Sidebar = ({ sections }) => {
  const [activeLink, setActiveLink] = useState(sections[0].id);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const indicatorRef = useRef(null);

  const im = [
    <i className="fa fa-home fa-2x" aria-hidden="true"></i>,
    <i className="fa fa-info-circle fa-2x" aria-hidden="true"></i>,
    <i className="fa fa-briefcase fa-2x" aria-hidden="true"></i>,
    <i className="fa fa-cogs fa-2x" aria-hidden="true"></i>,
    <i className="fa fa-mobile fa-3x" aria-hidden="true"></i>
  ];

  const linkItems = sections.map(({ id, label }, index) => ({
    id,
    label,
    icon: im[index],
    isActive: activeLink === id,
    onClick: () => {
      setActiveLink(id);
      const linkIndex = sections.findIndex(section => section.id === id);
      const newPosition = linkIndex * 70;
      setIndicatorPosition(newPosition);
    },
  }));

  useEffect(() => {
    const handleScroll = () => {
      const sectionPositions = {};
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          sectionPositions[id] = section.offsetTop - 200;
        }
      });

      const scrollPosition = window.scrollY;

      for (const [key, value] of Object.entries(sectionPositions)) {
        if (scrollPosition >= value) {
          setActiveLink(key);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  useEffect(() => {
    if (indicatorRef.current) {
      indicatorRef.current.style.transform = `translateY(${indicatorPosition}px)`;
    }
  }, [indicatorPosition]);

  return (
    <>
      <div className='app__sidebar'>
        <ul className='app__sidebar-links'>
          {linkItems.map(({ id, icon, isActive, onClick }) => (
            <li key={id} className={isActive ? 'active' : ''} onClick={onClick}>
              <a href={`#${id}`}>
                <span className="sidebar-icon">{icon}</span>
              </a>
            </li>
          ))}
          <div className='indicator' ref={indicatorRef}></div>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;







