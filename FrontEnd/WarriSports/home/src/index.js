import React from 'react';
import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';

import HomePage from './web/pages/home';
import Sports from './web/pages/sports';
import LiveBetting from './web/pages/live';
import P2pBetting from './web/pages/p2p';
import Casino from './web/pages/casino';
import AppDownload from './web/pages/appdownload';
import Virtuals from './web/pages/virtuals';
import Promotions from './web/pages/promotions'
import ErrorPage from './web/pages/errorPage';
import Dashboard from './web/clients/lite/dashboard';
import AdminDashboard from './web/scenes/dashboard';
import Deposit from './web/clients/lite/deposit';
import Withdraw from './web/clients/lite/withdraw';
import Transactions from './web/clients/lite/transactions';
import Settings from './web/clients/lite/settings';
import Referral from './web/clients/lite/referrals';

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
    path: "promotions",
    element: <Promotions />,
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
    path: "clients/withdraw",
    element: <Withdraw />,
    errorElement: <ErrorPage />,
  },

  {
    path: "clients/transactions",
    element: <Transactions />,
    errorElement: <ErrorPage />,
  },

  {
    path: "clients/referral",
    element: <Referral />,
    errorElement: <ErrorPage />,
  },

  {
    path: "clients/settings",
    element: <Settings />,
    errorElement: <ErrorPage />,
  },

  // Admin Dashboard Layout

  {
    path: "admin/dashboard",
    element: <AdminDashboard />,
    errorElement: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router}>
      <HomePage />
    </RouterProvider>
);