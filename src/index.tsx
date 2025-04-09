import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app/App.tsx';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './assets/styles/styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
