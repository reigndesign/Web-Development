import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './global/pages/home';
import Sports from './global/pages/sports';
import LiveBetting from './global/pages/live';
import P2pBetting from './global/pages/p2pBetting';
import Casino from './global/pages/casino';
import AppDownload from './global/pages/appDownload';
import Virtuals from './global/pages/appDownload';
import ErrorPage from './global/pages/errorPage';
import Dashboard from './global/clients/dashboard/index';
import Deposit from './global/clients/dashboard/deposit';
import Withdraw from './global/clients/dashboard/withdraw';
import Transactions from './global/clients/dashboard/transactions';
import Settings from './global/clients/dashboard/settings';
import Referral from './global/clients/dashboard/referral';
import App from './App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "sport",
    element: <Sports />,
    errorElement: <ErrorPage />,
  },

  {
    path: "live",
    element: <LiveBetting />,
    errorElement: <div><ErrorPage /></div>,
  },

  {
    path: "p2p-betting",
    element: <P2pBetting />,
    errorElement: <ErrorPage />,
  },

  {
    path: "Casino",
    element: <Casino />,
    errorElement: <ErrorPage />,
  },

  {
    path: "virtuals",
    element: <Virtuals />,
    errorElement: <ErrorPage />,
  },

  {
    path: "app",
    element: <AppDownload />,
    errorElement: <ErrorPage />,
  },


  // Clients Layout Routes
  {
    path: "clients/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "clients/deposit",
    element: <Deposit />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/withdraw",
    element: <Withdraw />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/transactions",
    element: <Transactions />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/referral",
    element: <Referral />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/settings",
    element: <Settings />,
    errorElement: <ErrorPage />,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} >
      <App />
    </RouterProvider>
);