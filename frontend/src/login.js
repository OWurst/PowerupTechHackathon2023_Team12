import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './login.css';

const Login = () => {
  // The Battle Bus has arrived, and it brought two chests to store your credentials! 🚌📦
  const [username, setUsername] = useState(''); // This is your username chest. 👤
  const [password, setPassword] = useState(''); // And this is your password chest. 🔒
  const [errorMessage, setErrorMessage] = useState(''); // This is your error message flag. ⚠️
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();
  // When you collect a new username, store it in your username chest!
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // When you collect a new password, secure it in your password chest!
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Prepare for a Victory Royale! It's time to submit your credentials and join the battle!
  const handleSubmit = (event) => {
    event.preventDefault();

    // Before you jump into the fray, make sure you've packed both your username and password!
    if (username.trim() === '' || password.trim() === '') {
      // Uh-oh! You're missing something crucial! You need to fill in both your username and password!
      setErrorMessage('Incorrect/blank username or password');
      return;
    }

    // Huzzah! You're ready for battle! Your username and password are secured in your chests.
    console.log('Username:', username);
    console.log('Password:', password);

    // Oops! It seems your password didn't pass the security check. Don't worry, you can try again!


    // if (password !== 'bong' || username !== 'bing') {
    //   // Alert the player with a red warning message that their username or password is incorrect.
    //   setErrorMessage('Incorrect/blank username or password');
    //   setLoginMessage('');
    //   return;
    // } else if (password === 'bong' && username === 'bing') {
    //   setLoginMessage('Success, loggin you in');
    //   setErrorMessage('');
    //   return;
    // }

    // Victory Royale! Your login is successful, and you're ready to dominate the battlefield!
    setErrorMessage('');
    console.log('Login successful!');
    navigate("/survey");
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* The error message appears in red color on the webpage. */}
      {loginMessage && <p style={{color: 'green'}}>{loginMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Log In</button> {/* Clicking this button triggers the submission of credentials. */}
      </form>

        <h4>Don't have an account?&nbsp;
        <Link to="/register">Register</Link>
        </h4>
    </div>
  );
};

export default Login;
