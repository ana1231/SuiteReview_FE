import { useState, useEffect } from "react";
import OneReview from "./OneReview";

const Reviews = ({
  hotel_Id,
  userIdLoggedIn,
  URL,
  profileComponent,
  loggedIn,
}) => {
  // create state to hold reviews
  const [reviews, setReviews] = useState(null);

  //=========
  // Get Data
  //=========

  // =======================================
  //              BACKEND ROUTES
  // =======================================
  // Action    URL                   HTTP Verb     Explaination
  //______________________________________________________________________________________
  // Index     /reviews/:hotel_ID      GET         returns list of reviews for particular hotel
  // Index     /reviews/user/:user_ID  GET         returns list of reviews for particular user
  // Delete    /reviews/:id            DELETE      updates a particular review

  const getReviewsData = async (some_Id) => {
    if (profileComponent && loggedIn) {
      const backendURLUser = URL + "reviews/user/" + some_Id;

      //make api call and get response
      const response = await fetch(backendURLUser);
      // turn response into javascript object
      const data = await response.json();

      console.log(data);
      // set the hotels state to the data
      //console.log(data)
      setReviews(data);
    } else {
      const backendURLHotel = URL + "reviews/" + some_Id;

      //make api call and get response
      const response = await fetch(backendURLHotel);
      // turn response into javascript object
      const data = await response.json();

      console.log(data);
      // set the hotels state to the data
      //console.log(data)
      setReviews(data);
    }
  };

  //========================
  // Delete
  //========================

  const deleteReview = async (id) => {
    await fetch(URL + "reviews/" + id, {
      method: "delete",
    });
    profileComponent
      ? getReviewsData(userIdLoggedIn)
      : getReviewsData(hotel_Id);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    profileComponent
      ? getReviewsData(userIdLoggedIn)
      : getReviewsData(hotel_Id);
  }, []);

  const loaded = () => {
    return reviews.map((reviews) => (
      <div className="review" key={reviews._id}>
        <OneReview
          review={reviews}
          deleteReview={deleteReview}
          loggedIn={loggedIn}
          userIdLoggedIn={userIdLoggedIn}
          profileComponent={profileComponent}
        />
      </div>
    ));
  };

  return reviews ? loaded() : <h1>Loading...</h1>;
};

export default Reviews;
