import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// import AuthLayout from '../app/layouts/auth-layout/AuthLayout'

export default function PublicRouter() {
  // const { location } = window;

  // if (location.pathname === '/' && localStorage.getItem('token')) {
  //   localStorage.removeItem('token');
  // }

  const isLoggedIn = localStorage.getItem('token');

  return (
    <>
      {!isLoggedIn ? (
        <>
          <Outlet />
          {/* <MainLayout>
						</MainLayout> */}
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
