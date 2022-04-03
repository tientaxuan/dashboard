import React, { useEffect, useState, useRef } from 'react';

import './themeMenu.css';

import { useSelector, useDispatch } from 'react-redux';

import { setThemeMode, setThemeColor } from '../../slices/theme/themeSlice';

const mode_settings = [
  {
    id: 'light',
    name: 'light',
    background: 'light-background',
    class: 'theme-mode-light',
  },
  {
    id: 'dark',
    name: 'dark',
    background: 'dark-background',
    class: 'theme-mode-dark',
  },
];

const color_settings = [
  {
    id: 'blue',
    name: 'blue',
    background: 'blue-color',
    class: 'theme-color-blue',
  },
  {
    id: 'red',
    name: 'red',
    background: 'red-color',
    class: 'theme-color-red',
  },
  {
    id: 'cyan',
    name: 'cyan',
    background: 'cyan-color',
    class: 'theme-color-cyan',
  },
  {
    id: 'orange',
    name: 'orange',
    background: 'orange-color',
    class: 'theme-color-orange',
  },
  {
    id: 'green',
    name: 'green',
    background: 'green-color',
    class: 'theme-color-green',
  },
];

const ThemeMenu = () => {
  const [active, setActive] = useState(false);

  const dropdown_el = useRef(null);

  const handleToggle = (e) => {
    e.preventDefault();
    setActive((state) => !state);
  };

  useEffect(() => {
    const handleMouseDown = document.addEventListener('mousedown', (e) => {
      if (dropdown_el.current && !dropdown_el.current.contains(e.target)) {
        setActive(false);
      }
    });
    return document.removeEventListener('mousedown', handleMouseDown);
  }, []);

  const customTheme = useSelector((store) => store.theme);

  console.log(customTheme);

  const dispatch = useDispatch();

  const setMode = (mode) => {
    dispatch(setThemeMode(mode.id));
    localStorage.setItem('mode', mode.id);
  };

  const setColor = (color) => {
    dispatch(setThemeColor(color.id));
    localStorage.setItem('color', color.id);
  };

  return (
    <div ref={dropdown_el}>
      <button className='dropdown__toggle' onClick={handleToggle}>
        <i className='bx bx-palette'></i>
      </button>
      <div className={`theme-menu ${active ? 'active' : ''}`}>
        <h4>Theme setting</h4>
        <button className='theme-menu__close' onClick={handleToggle}>
          <i className='bx bx-x'></i>
        </button>
        <div className='theme-menu__select'>
          <span>Choose mode</span>
          <ul className='mode-list'>
            {mode_settings.map((item, index) => (
              <li key={index} onClick={() => setMode(item)}>
                <div className={`mode-list__color ${item.background}`}>
                  <i
                    className={`bx bx-check ${
                      customTheme.mode === item.id ? 'active' : ''
                    }`}
                  ></i>
                </div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='theme-menu__select'>
          <span>Choose color</span>
          <ul className='mode-list'>
            {color_settings.map((item, index) => (
              <li key={index} onClick={() => setColor(item)}>
                <div className={`mode-list__color ${item.background} `}>
                  <i
                    className={`bx bx-check ${
                      customTheme.color === item.id ? 'active' : ''
                    }`}
                  ></i>
                </div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThemeMenu;
