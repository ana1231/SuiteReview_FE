import React, { useState } from "react";
import { useNavigate } from "react-router";

const CreateAccount = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [userImage, setUserImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const URL = `${props.URL}users/new`;
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userObj = { userName, password, firstName, lastName, description, userImage };
    handleCreateUser(userObj);
    setUserName("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setDescription("");
    setUserImage("");
  };

  const handleCreateUser = async (userObj) => {
    try {
      const response = await fetch(URL, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObj),
      });

      const data = await response.json();
      if (data.userName) {
        setErrorMessage("");
        props.setCurrentUser(data);
        props.setUserId(data.user_Id);
        navigate("/hotels");
      } else {
        setErrorMessage(data.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while creating the account.");
    }
  };

  //print error message
  return (
    <div className="create-account-form">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Profile Image:</label>
          <textarea
            value={userImage}
            onChange={(e) => setUserImage(e.target.value)}
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
      <div className="error-message-createUser">
        <p>{errorMessage}</p>
      </div>
    </div>
  );
};

export default CreateAccount;
