import React, { useState, useEffect, useRef } from 'react';

import './dropdown.css';

// const clickOutsideRef = (content_ref, toggle_ref) => {
//   document.addEventListener('mousedown', (e) => {
//     if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
//       e.preventDefault();
//       content_ref.current.classList.toggle('acitve');
//       console.log('active');
//     }
//     if (content_ref.current && !content_ref.current.contains(e.target)) {
//       content_ref.current.classList.remove('active');
//     }
//   });
// };

const Dropdown = (props) => {
  const [active, setActive] = useState(false);
  const dropdown_el = useRef(null);
  useEffect(() => {
    const handleMouseDown = document.addEventListener('mousedown', (e) => {
      if (dropdown_el.current && !dropdown_el.current.contains(e.target)) {
        setActive(false);
      }
    });
    return document.removeEventListener('mousedown', handleMouseDown);
  }, []);

  const handleToggle = (e) => {
    e.preventDefault();
    setActive((state) => !state);
  };
  return (
    <div className='dropdown' ref={dropdown_el}>
      <button className='dropdown__toggle' onClick={handleToggle}>
        {props.icon ? <i className={props.icon.toString()}></i> : ''}
        {props.badge ? (
          <span className='dropdown__toggle-badge'>{props.badge}</span>
        ) : (
          ''
        )}
        {props.customToggle ? props.customToggle() : ''}
      </button>
      <div className={`dropdown__content ${active ? 'active' : ''}`}>
        {props.contentData && props.renderItems
          ? props.contentData.map((item, index) =>
              props.renderItems(item, index),
            )
          : ''}
        {props.renderFooter ? (
          <div className='dropdown_-footer'>{props.renderFooter()}</div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Dropdown;
