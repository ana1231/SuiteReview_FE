import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from './components/Main';

function App() {
  const [errorMessage, setErrorMessage] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  const handleCreateUser = async (userObj) => {
    try {
      const response = await fetch('http://localhost:4000/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
      });

      const data = await response.json();
      if (data.userName) {
        setErrorMessage('');
        setCurrentUser(data);
        navigate('/hotels');
      } else {
        setErrorMessage(data.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while creating the account.');
    }
  };

  const handleLogin = async (userObj) => {
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
      });

      const data = await response.json();
      if (data.userName) {
        setErrorMessage('');
        setCurrentUser(data);
        navigate('/hotels');
      } else {
        setErrorMessage(data.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while logging in.');
    }
  };

  const URL = 'http://localhost:4000/';

  return (
    <div className="App">
      <Main
        userIdLoggedIn={currentUser.user_Id}
        URL={URL}
        handleLogin={handleLogin}
        handleCreateUser={handleCreateUser}
        currentUser={currentUser}
      />
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
}

export default App;
