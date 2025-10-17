import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './global/components/home';

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);