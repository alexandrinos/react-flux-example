import React from 'react';
import ReactDOM from 'react-dom'; 	

import App from './components/App.jsx';
require('./main.scss');

var v=ReactDOM.render(<App />, document.getElementById('app-container'));
