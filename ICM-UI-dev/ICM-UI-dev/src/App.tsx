import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MainRoute from './router/MainRoute';
import ErrorBoundary from './components/ErrorBoundary';
import './App.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ToastContainer />
        <MainRoute />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
