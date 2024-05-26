import './App.css';
import { useState } from 'react';
import Main from './components/Main';

function App() {
  
  const [currentUser, setCurrentUser] = useState({});
  const [user_Id, setUserId] = useState('');
  const URL = process.env.REACT_APP_HEROKU_URL

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
        userIdLoggedIn={null}
      />
      )}
    </div>
  );
}

export default App;
