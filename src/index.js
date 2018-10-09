import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';

//Added
import { HashRouter } from 'react-router-dom'; 

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
