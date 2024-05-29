import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
  console.log("Header props:", props); // Log props for debugging

  const location = useLocation();
  let userName = "";
  let check = props.currentUser?.userName || "";

  if (check) {
    userName = props.currentUser.userName;
  }

  const resetCurrentUser = () => {
    console.log("Resetting user:", props.currentUser); // Log current user for debugging
    props.setCurrentUser({});
  };

  const isHomePage = location.pathname === "/hotels";

  return (
    <div className="header">
      <div className="header-content">
        <h1>
          <Link to="/hotels" className="app-name">
            Suite Review
          </Link>
        </h1>
        <h3 className="brand-message">Share your experiences</h3>
        <br />
        <div className="profile-logout">
          {userName && location.pathname !== "/profile" ? (
            <h4>
              <Link to="/profile" className="profile-name">
                Your Profile |
              </Link>
            </h4>
          ) : (
            <h4>
              {location.pathname !== "/register" &&
              location.pathname !== "/profile" && location.pathname !== "/newReview" &&
              !location.pathname.includes("/reviews") ? (
                <Link to="/register">Log in - Sign Up</Link>
              ) : null}
            </h4>
          )}
          {userName ? (
            <h4 onClick={resetCurrentUser}>
              <Link to="/register" className="log-out-button">
                Log-Out
              </Link>
            </h4>
          ) : null}
        </div>
      </div>
      {isHomePage && (
        <img
          src="https://lp-cms-production.imgix.net/2021-05/GettyRF_462144413.jpg"
          alt="Home Page Banner"
          className="home-image"
        />
      )}
    </div>
  );
};

export default Header;
