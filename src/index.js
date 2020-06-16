import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "HTML", completed: true },
  { id: "todo-1", name: "CSS", completed: true },
  { id: "todo-2", name: "Javascript", completed: false },
  { id: "todo-3", name: "React", completed: false },
  { id: "todo-4", name: "Angular", completed: false }
];
ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
