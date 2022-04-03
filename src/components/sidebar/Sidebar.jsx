import React from 'react';

import './sidebar.css';

// import logo from '../../assets/images/logo.png';

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
  const pathname = useLocation().pathname;
  return (
    <div className='sidebar'>
      <div className='sidebar__logo'>
        <img src alt='company logo' />
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
