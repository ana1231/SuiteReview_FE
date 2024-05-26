import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
  const location = useLocation();
  let userName = '';
  console.log(props.userIdLoggedIn)

  if (props.userIdLoggedIn) {
    console.log(props.currentUser);
    userName = props.currentUser.userName;
  }

  //If on register, won't show the "login-signup" option
  return (
    <div className="header">
      <h1>Suite Review</h1>
      {userName ? (
        <h4>{userName}</h4>
      ) : (
        <h4>{location.pathname !== "/register" ? <Link to="/register">Log in - Sign Up</Link> : null}</h4>
      )}
    </div>
  );
};

export default Header;
