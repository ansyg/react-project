import React from 'react';
import './index.css';
// import './styles/layout.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
// import "primereact/resources/themes/bootstrap4-light-purple/theme.css";

//core
import "primereact/resources/primereact.min.css";
import 'primeflex/primeflex.css';

import 'primeicons/primeicons.css';
import 'antd/dist/reset.css';

import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";


const rootElement =
  document.getElementById('root');
const root =
  createRoot(rootElement);

// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </React.StrictMode>
);




