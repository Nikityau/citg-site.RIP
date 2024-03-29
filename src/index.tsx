import 'core-js'

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';

import './index.css';
import 'normalize.css';
import './assets/fonts/fonts.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
