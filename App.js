import React, { useState } from 'react';
import './App.css';

function App() {
  // State for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For demonstration, just log the values
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add authentication logic here
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: 300 }}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </label>
          <label style={{ marginTop: 10 }}>
            Password:
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" style={{ marginTop: 20 }}>Login</button>
        </form>
      </header>
    </div>
  );
}

export default App;