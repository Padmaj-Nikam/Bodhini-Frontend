import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure you import from 'react-dom/client'
import App from './App';

// Create a root element for React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
