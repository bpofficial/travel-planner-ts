import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

let root = document.getElementById('root');
if (!root) {
      root = document.createElement('div');
      root.id = 'root';
      document.body.appendChild(root);
}
console.log('index loaded')
ReactDom.render(<App />, root);