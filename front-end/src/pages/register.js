import React from "react";
import Login from "../components/registerSection/Login";
import CreateAccount from "../components/registerSection/CreateAccount";
import Header from "../components/headerSection/Header";

const Register = ()=> {

  return (
    <>
    <Header/>
  <div className="register-section">
    <Login/>
    <CreateAccount/>
  </div>
  </>)
  
}

export default Register