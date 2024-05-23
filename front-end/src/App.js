
import './App.css';


// IMPORT Components
import Main from "./components/Main"


function App() {
  
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "http://localhost:4000/";


  //==================
  // ONLY FOR TESTING
  //=================

  //not logged in:
  //  userIdLoggedIn = {null}

  //logged in:
  //  userIdLoggedIn = {101}


  return (

    <div className="App">

      <Main userIdLoggedIn = {101} URL ={URL}/>

      

    </div>

  );
}

export default App;
