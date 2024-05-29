import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import hotelData from "../data";
import Header from "../components/headerSection/Header";

const NewReviewForm = (props) => {
  const navigate = useNavigate();

  // State to hold the form data
  const [newForm, setNewForm] = useState({
    hotel_Id: "",
    user_Id: props.userIdLoggedIn,
    rating: "",
    description: "",
  });

  // State to hold the backend URL which will be updated after hotel selection
  const [backendURLReview, setBackendURLReview] = useState("");

  // Function to create a new review
  const createReview = async (review) => {
    const testURL = `${props.URL}reviews/${newForm.hotel_Id}`
    console.log(`Creating new review`);
    console.log(review);
    //await fetch(backendURLReview, {
    await fetch(testURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    });
  };

  // Handlers
  const handleChange = (event) => {
    setNewForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleDropDown = (e) => {
    setNewForm((prev) => ({
      ...prev,
      hotel_Id: e.value,
    }));
    setBackendURLReview(`${props.URL}reviews/${e.value}`);
  };

  const fixFormTypes = () => {
    setNewForm({
      ...newForm,
      rating: Number(newForm.rating),
      hotel_Id: Number(newForm.hotel_Id),
    });
  };

  const handleSubmit = (e) => {
    console.log("success");
    e.preventDefault();
    fixFormTypes();
    createReview(newForm);
    navigate(`/profile`);
  };

  return (
    <div className="newForm">
      <Header
          currentUser={props.currentUser}
          userLoggedIn={props.userLoggedIn}
          setUserId={props.setUserId}
          setCurrentUser={props.setCurrentUser}
        />
      <div className="new-form">
      <form onSubmit={handleSubmit}>
        <label>
          Hotel:
          <div className="select-elements-form">
          <Select
            onChange={handleDropDown}
            options={hotelData}
            name="hotel_Id"
          />
          </div>
        </label>

        <label>
          <br></br>
          Rating:
          <input
            type="text"
            value={newForm.rating}
            name="rating"
            onChange={handleChange}
          />
        </label>

        <label>
          <br></br>
          <br></br>
          Description:
          <input
            type="text"
            value={newForm.description}
            name="description"
            onChange={handleChange}
          />
        </label>
        <br></br>
        <input className="submit-button" type="Submit" value="Submit Review" />
      </form>
    </div>
    </div>
  );
};

export default NewReviewForm;


