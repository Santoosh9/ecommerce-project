import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider} from 'react-redux';
import {store} from './utils/store.js'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster position="top-center"/>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      
    </BrowserRouter>

  </React.StrictMode>
);
