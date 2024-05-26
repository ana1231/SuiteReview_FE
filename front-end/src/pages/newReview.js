import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import hotelData from "../data";

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
    console.log(`Creating new review`);
    console.log(review);
    await fetch(backendURLReview, {
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
      <form onSubmit={handleSubmit}>
        <label>
          Hotel:
          <Select
            onChange={handleDropDown}
            options={hotelData}
            name="hotel_Id"
          />
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
        <input type="Submit" value="Submit Review" />
      </form>
    </div>
  );
};

export default NewReviewForm;

//Explanation

// State Management:
// newForm state is used to hold the form data for the new review.

// Handlers:
// handleChange updates the newForm state when the input fields change.
// handleDropDown updates the hotel_Id in the newForm state when a hotel is selected from the dropdown.
// fixFormTypes ensures that rating and hotel_Id are converted to numbers before sending the data to the backend.

// handleSubmit Function:
// Prevents the default form submission behavior.
// Calls fixFormTypes to ensure data types are correct.
// Calls createReview to send the new review data to the backend.
// Navigates to the /hotels page after successful submission.

// Create Review Function:
// Sends a POST request to the backend with the review data.
// The backend URL is constructed using props.URL and the endpoint for creating reviews.

// Form Rendering:
// The form includes input fields for hotel selection, rating, and description.
// The form submission button is labeled "Submit Review".

//IMPORTANT

//This page is currently placed in Main as
