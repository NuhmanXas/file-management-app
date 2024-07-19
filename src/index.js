import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import HowItWorksPage from './Pages/HowItWorksPage';
import FAQPage from './Pages/FAQPage';
import PricingPage from './Pages/PricingPage';
import DashboardPage from './Pages/DashboardPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/work",
    element: <HowItWorksPage />,
  },
  {
    path: "/faq",
    element: <FAQPage />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
