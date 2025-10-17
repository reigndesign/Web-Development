import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import React from 'react';

// function loadRootData() {
//   // Add your data loading logic here, or return a resolved promise for now
//   return Promise.resolve({});
// }

const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
    loader: loadData,
    errorElement: <ErrorPage />,
    children: [
      { path: "teams", element: <Teams />, loader: loadTeamsData },]
  },
]);

function Dashboard() {
  return (
    <div>
      <h1>User Dashboard</h1>
    </div>
  );
}

export default Dashboard;

<RouterProvider router={router} />