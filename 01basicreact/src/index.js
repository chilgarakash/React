import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
let anotherElement = " Akash";

const reactElement= React.createElement(
   'a',
   {href:'https://google.com',target:'_blank'},
   'click me',
   anotherElement
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   reactElement
   // <App />

);

