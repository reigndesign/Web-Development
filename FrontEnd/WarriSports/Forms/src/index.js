import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginSignupForm from './Components/LoginSignupForm';

function App() {
  return (
    <div>
      <LoginSignupForm />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);