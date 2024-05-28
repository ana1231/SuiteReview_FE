import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
  const location = useLocation();
  let userName = "";
  let check = props.currentUser?.userName || "";

  if (check) {
    userName = props.currentUser.userName;
  }

  const resetCurrentUser = () => {
    props.setCurrentUser({});
  };

  //If on register, won't show the "login-signup" option
  return (
    <div className="header">
      <h1><Link to="/hotels">Suite Review</Link></h1>
      {userName ? (
        <h4>{<Link to="/profile">{userName}</Link>}</h4>
      ) : (
        <h4>
          {location.pathname !== "/register" &&
          location.pathname !== "/profile" ? (
            <Link to="/register">Log in - Sign Up</Link>
          ) : null}
        </h4>
      )}
      {userName ? (
        <h4 onClick={() => resetCurrentUser()}>
          {<Link to="/register">Log-Out</Link>}
        </h4>
      ) : null}
    </div>
  );
};

export default Header;
