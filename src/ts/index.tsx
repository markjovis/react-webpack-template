import React from 'react';
import ReactDOM from 'react-dom/client';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import pkg from '../../package.json';
import HelloWorld from './HelloWorld';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();  
}

document.getElementById('title').innerHTML = pkg.appName;
const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <HelloWorld/>
  </React.StrictMode>
);
