import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/headerSection/Header";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from the server after login
    const userData = localStorage.getItem("userData"); // Retrieve user data from local storage
    if (userData) {
      setUser(JSON.parse(userData)); // Parse JSON data and set user state
    } else {
      // Redirect to login page if user data is not available
      navigate("/register");
    }
  }, []);

  return (
    <div className="profile-page">
      <Header />
      {user && (
        <>
        <img className="profile-image" src={user.image} alt="Profile"></img>
        <h3>{user.userName}</h3>
          <h2>Welcome, {user.firstName} {user.lastName}!</h2>
          <br></br>
          <h3>About you</h3>
          <br></br>
          <p>{user.description}</p>
          <p>Email: {user.email}</p>
          {/* Add more user information here ---- list of reviews*/}
        </>
      )}
    </div>
  );
};

export default Profile;
