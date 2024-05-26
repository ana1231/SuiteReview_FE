import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const URL =  `${props.URL}users/login`

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userObj = { userName, password };
      await handleLogin(userObj);
      console.log(userObj)
      navigate('/hotels'); // Redirect to the home page upon successful login
    } catch (error) {
      setError('Login failed. Please try again.');
    }
  };

  const handleLogin = async (userObj) => {
    console.log(userObj)
    try {
      const response = await fetch(URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
      });

      const data = await response.json();
      if (data.userName) {
        setErrorMessage('');
        props.setCurrentUser(data);
        props.setUserId(data.user_Id)
        navigate('/hotels');
      } else {
        setErrorMessage(data.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while logging in.');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
