import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Web from './pages/web/Web';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Web />
  </React.StrictMode>
);