import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store'
import App from './components/app.jsx'

const render = () => {
  ReactDOM.render(<App store={Store}/>, document.getElementById('main'));
}
Store.subscribe(render)
render();
