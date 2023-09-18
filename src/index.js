import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToastProvider>
    
  </React.StrictMode>
);

