import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import App from './App';
import './App.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
  </BrowserRouter>
);
