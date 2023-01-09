// NPM Import
import React from 'react';
import ReactDOM from 'react-dom/client';

// Component import
import App from './App';

// Generic style import
import './styles/reset.css';
import './styles/generic-style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
