import React from "react";
import Login from "../components/registerSection/Login";
import CreateAccount from "../components/registerSection/CreateAccount";
import Header from "../components/headerSection/Header";

const Register = (props) => {
  return (
    <>
      <Header
        URL={props.URL}
        userIdLoggedIn={props.userIdLoggedIn}
        setUserId={props.setUserId}
        setCurrentUser={props.setCurrentUser}
      />
      <div className="register-section">
        <div className="overlay"></div>
        <div className="form-container">
          <Login
            handleLogin={props.handleLogin}
            URL={props.URL}
            setUserId={props.setUserId}
            setCurrentUser={props.setCurrentUser}
          />
          <CreateAccount
            handleCreateUser={props.handleCreateUser}
            URL={props.URL}
            setUserId={props.setUserId}
            setCurrentUser={props.setCurrentUser}
          />
        </div>
      </div>
    </>
  );
};

export default Register;
