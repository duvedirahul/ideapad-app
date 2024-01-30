import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import axios from 'axios';
import './styles/index.css';

axios.defaults.baseURL = 'http://localhost:3200';
axios.defaults.withCredentials =true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
