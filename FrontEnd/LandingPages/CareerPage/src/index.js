import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainHead from './homePage';
import JobDetails from './jobDetails';




export default function App() {
  return (
    <>
    <MainHead />
    {/* <JobDetails /> */}
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
