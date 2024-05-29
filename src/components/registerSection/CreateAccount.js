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
    const userObj = { userName, password, firstName, lastName, description };
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
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <textarea
            value={description}
            placeholder="About you :)"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <textarea
            value={userImage}
            placeholder="Your Profile image link"
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
