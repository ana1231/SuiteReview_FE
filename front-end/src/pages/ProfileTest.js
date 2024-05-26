import { useState, useEffect } from "react";
import Reviews from "../components/Reviews";
import Header from "../components/headerSection/Header";
import { useNavigate } from "react-router-dom";

const ProfileTest = (props) => {
  // create state to hold reviews
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState(null);
  const navigate = useNavigate();


  //change currentUser to userLoggedIn
  useEffect(() => {
    if (props.userIdLoggedIn) {
      setUser(JSON.parse(props.currentUser));
    } else {
      navigate("/register");
    }
  }, []);


  //=========
  // Get Data
  //=========

  const getReviewsData = async (user_Id) => {
    //getting list of reviews for this specific user.
    try {
      const backendURLReviews =
        props.URL + "reviews/user/" + user_Id;

      //make api call and get response
      const response2 = await fetch(backendURLReviews);
      // turn response into javascript object
      const data2 = await response2.json();
      console.log(data2);
      // set the hotels state to the data
      //console.log(data)
      setReviews(data2);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReviewsData(props.userIdLoggedIn);
  }, []);

  const loaded = () => {
    return (
      <div className="profile-page">
        <Header />
        {user && (
          <>
            {user.image && <img className="profile-image" src={user.image} alt="Profile" />}
            <h3>{user.userName}</h3>
            <div className="description-profile-page">
              <h2>Welcome, {user.firstName} {user.lastName}!</h2>
              <br />
              <h3>About you:</h3>
              <br />
              <p>{user.description}</p>
            </div>
          </>
        )}
        <div className="reviews_container">
          <Reviews
            hotel_Id={null}
            userIdLoggedIn={props.userIdLoggedIn}
            URL={props.URL}
            loggedIn={props.userIdLoggedIn ? true : false}
            profileComponent={true}
          />
        </div>
      </div>
    );
  };

  return reviews ? loaded() : <h1>Loading...</h1>;
};

export default ProfileTest;
