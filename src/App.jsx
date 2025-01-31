import React, { useState } from 'react';
import './App.css';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSwitchMode = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div className="App">
      <h1>{isAdmin ? 'Admin' : 'User'} Login</h1>
      <button onClick={handleSwitchMode}>
        Switch to {isAdmin ? 'User' : 'Admin'} Mode
      </button>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
