import React, { useEffect } from 'react';

import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';

import Sidebar from '../sidebar/Sidebar';

import Dashboard from '../../pages/Dashboard';
import Customers from '../../pages/Customers';

import { useSelector, useDispatch } from 'react-redux';

import { setThemeMode, setThemeColor } from '../../slices/theme/themeSlice';

import './layout.css';

import TopNav from '../topnav/TopNav';

const Inside = (props) => {
  const customTheme = useSelector((store) => store.theme);

  return (
    <div
      className={`layout theme-mode-${customTheme.mode} theme-color-${customTheme.color}`}
    >
      <Sidebar {...props} />
      <div className='layout__content'>
        <TopNav />
        <div className='layout__content-main'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const mode = localStorage.getItem('mode');
    const color = localStorage.getItem('color');
    mode && dispatch(setThemeMode(mode));
    color && dispatch(setThemeColor(color));
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inside />}>
          <Route index element={<Dashboard />}></Route>
          <Route path='customers' element={<Customers />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
