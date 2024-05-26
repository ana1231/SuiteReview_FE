import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from './components/Main';

function App() {
  const [errorMessage, setErrorMessage] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [user_Id, setUserId] = useState('');
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_HEROKU_URL
  // const LOGIN_URL = `${URL}users/login`;
  // const NEW_USER_URL = `${URL}users/new`;



  // const handleCreateUser = async (userObj) => {
  //   try {
  //     const response = await fetch(NEW_USER_URL, {
  //       method: 'post',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(userObj)
  //     });

  //     const data = await response.json();
  //     if (data.userName) {
  //       setErrorMessage('');
  //       setCurrentUser(data);
  //       navigate('/hotels');
  //     } else {
  //       setErrorMessage(data.message || 'An error occurred');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     setErrorMessage('An error occurred while creating the account.');
  //   }
  // };

  // const handleLogin = async (userObj) => {
  //   console.log(userObj)
  //   try {
  //     const response = await fetch(LOGIN_URL, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(userObj)
  //     });

  //     const data = await response.json();
  //     if (data.userName) {
  //       setErrorMessage('');
  //       setCurrentUser(data);
  //       navigate('/hotels');
  //     } else {
  //       setErrorMessage(data.message || 'An error occurred');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     setErrorMessage('An error occurred while logging in.');
  //   }
  // };

 
  return (
    <div className="App">
      {currentUser.user_Id ? (
        <Main
          userIdLoggedIn={currentUser.user_Id}
          URL={URL}
          currentUser={currentUser}
          setUserId={setUserId}
          setCurrentUser={setCurrentUser}
        />
      ) : (
        <Main
        URL={URL}
        setUserId={setUserId}
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
      />
      )}
    </div>
  );
}

export default App;
