import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this file exists
import App from './App'; // Your main App component
import reportWebVitals from './reportWebVitals'; // Performance monitoring (optional)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
