import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { FilterProvider, CartProvider } from './context';
import { ScroolToTop } from './component';
import { ToastContainer} from 'react-toastify'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <ScroolToTop />
          <ToastContainer closeButton={false} autoClose={3000} position="top-center" />
          <App />
        </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);