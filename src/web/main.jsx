import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import LogoStar from '../components/header/LogoStar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LogoStar />
  </BrowserRouter>
);
