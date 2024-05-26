import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
  const location = useLocation();
  let userName = '';
  let check = props.currentUser?.userName || '';

  if (check) {
    userName = props.currentUser.userName;
  }

  //If on register, won't show the "login-signup" option
  return (
    <div className="header">
      <h1>Suite Review</h1>
      {userName ? (
        <h4>{<Link to="/profile">{userName}</Link>}</h4>
      ) : (
        <h4>{(location.pathname !== "/register" && location.pathname !== "/profile")? <Link to="/register">Log in - Sign Up</Link> : null}</h4>
      )}
    
    </div>
  );
};
//add a register page link which is triggered by a logout button
export default Header;
