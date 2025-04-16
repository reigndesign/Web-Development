import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

export default function App() {
  return (
    <>
      <div className="intro">
        <h1>Welcome to SuperBet</h1>
        <p>Bet Smarter, Bet Fair</p>
      </div>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

