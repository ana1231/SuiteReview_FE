
import './App.css';
import { useState } from 'react';


// IMPORT Components
import Main from "./components/Main"


function App() {


  //States for saving the userName and passwords entered for both login and create and account
  
  const [errorMessage, setErrorMessage] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateUser = async (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    let userObj = {
      userName: userName,
      password: password
    };
    setUserName('');
    setPassword('');

    try {
      const response = await fetch('http://localhost:4000/createaccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
      });

      const data = await response.json();
      if (data.userName) {
        console.log(data);
        setErrorMessage('');
        setCurrentUser(data);
      } else {
        setErrorMessage(data);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while creating the account.');
      
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    let userObj = {
      userName: userName,
      password: password
    };
    setUserName('');
    setPassword('');

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
        console.log(data);
        setErrorMessage('');
        setCurrentUser(data);
      } else {
        console.log(data);
        setErrorMessage(data);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while logging in.');
      
    }
  };
    
  
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "http://localhost:4000/";


  return (

    <div className="App">

      <Main userIdLoggedIn = {101} URL ={URL} handleLogin={handleLogin} handleCreateUser={handleCreateUser} currentUser={currentUser}/>
      

      

    </div>

  );
}


export default App;
