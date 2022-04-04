import React, { useEffect, useState, useRef } from 'react';

import './sidebar.css';

import logo from '../../assets/images/logo.png';

import { Link, useLocation } from 'react-router-dom';

import sidebar__items from '../../assets/JsonData/sidebar_routes.json';

const SidebarItem = (props) => {
  const active = props.active ? 'active' : '';
  return (
    <div className='sidebar__item'>
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const sidebar_el = useRef(false);

  useEffect(() => {
    const handleMouseDown = document.addEventListener('mousedown', (e) => {
      if (sidebar_el.current && !sidebar_el.current.contains(e.target)) {
        sidebar_el.current.classList.remove('active');
      }
    });
    return document.removeEventListener('mousedown', handleMouseDown);
  }, []);
  const pathname = useLocation().pathname;
  const handleSidebarHamburger = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
  };
  return (
    <div className='sidebar' ref={sidebar_el}>
      <div className='sidebar__logo'>
        <div className='sidebar__hamburger' onClick={handleSidebarHamburger}>
          <i className='bx bx-menu'></i>
        </div>
        <img src={logo} alt='company logo' />
      </div>
      {sidebar__items.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active={pathname === item.route}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
