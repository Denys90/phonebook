import React, { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';

import Layout from '../layout/layout';
import Home from '../pages/Home';

// import { useUsers } from 'store/hooks';
import { useUsers } from '../store/hooks';

import PrivateRoute from '../guards/PrivateRoute';
import PublicRoute from '../guards/PublicRoute';

import { globalStyles } from '../styles/GlobalStyles/Globalstyles.styled';
import Spiner from './Spiner/Spiner';
import { ToastContainer } from 'react-toastify';

const Contacts = lazy(() => import('../pages/Contacts'));
const UserPage = lazy(() => import('../pages/UserPage'));

export const App = () => {
  const { isRefreshingUser, fetchCurrentUser } = useUsers();

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  return (
    <>
      <Global styles={globalStyles} />
      <ToastContainer />
      {isRefreshingUser ? (
        <Spiner />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route
              path="/userAccount"
              element={
                <PrivateRoute>
                  <UserPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
