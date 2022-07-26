import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ConverterField from './components/ConverterField';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConverterField />

    <App />
  </React.StrictMode>
);



