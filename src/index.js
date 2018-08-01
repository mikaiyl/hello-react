import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Keys from './App.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Keys name='Adam' />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
