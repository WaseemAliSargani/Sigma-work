import React, { useState } from 'react';

const LoginForm = () => {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const passmaker = (passw) => {
    if (passw.length < 8 || !/[A-Z]/.test(passw) || !/[a-z]/.test(passw) || !/\d/.test(passw)) {
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (passmaker(password)) {
      setErrorMessage('');
      // Perform actions to show logged-in page
    } else {
      setErrorMessage('Enter a password with at least one uppercase letter, one lowercase letter, and one digit, and a minimum length of 8 characters.');
    }
  };

  return (
    <div id="loginPage" style={{ display: 'block' }}>
      <h2>Login</h2>
      <input
        type="password"
        id="passwordInput"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button id="loginBtn" onClick={handleLogin}>Login</button>
      <p id="errorMessage" style={{ color: 'red' }}>{errorMessage}</p>
    </div>
  );
};

export default LoginForm;
