import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

export default function PrivateRouter() {
  const isLoggedIn = localStorage.getItem('token');
  return (
    <>
      {isLoggedIn ? (
        <>
          <MainLayout>
            <Outlet />
          </MainLayout>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
