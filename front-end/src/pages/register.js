import React from "react";
import Login from "../components/registerSection/Login";
import CreateAccount from "../components/registerSection/CreateAccount";
import Header from "../components/headerSection/Header";

const Register = (props)=> {
  

  return (
    <>
    <Header/>
  <div className="register-section">
    <Login handleLogin={props.handleLogin} URL={props.URL} setUserId={props.setUserId}
          setCurrentUser={props.setCurrentUser}/>
    <CreateAccount handleCreateUser={props.handleCreateUser} URL={props.URL} setUserId={props.setUserId}
          setCurrentUser={props.setCurrentUser}/>
  </div>
  </>)
  
}

export default Register