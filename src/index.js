import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Timer from './practice/timer.jsx';
import TodoPracLS from './practice/todoPracticeLS.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoPracLS />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();