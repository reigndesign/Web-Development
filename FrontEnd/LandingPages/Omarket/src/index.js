import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


export default function App() {
  return (
    <>
      <div>
        <h1>Welcome to my new react page</h1>
        <p>Where we built responsive website for your business</p>
      </div>
    </>
  )
}






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
