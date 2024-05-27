import { useState, useEffect } from "react";
import Reviews from "../components/Reviews";
import Header from "../components/headerSection/Header";
import { useNavigate } from "react-router-dom";
//import NewReviewForm from "./NewReview";
import { Link } from "react-router-dom";

const Profile = (props) => {
  // create state to hold reviews
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState(null);
  const navigate = useNavigate();

 
  useEffect(() => {
    if (props.userIdLoggedIn) {
      setUser(props.currentUser);
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
      const backendURLReviews = props.URL + "users/profile/" + user_Id;

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
            {user.userImage && (
              <img
                className="profile-image"
                src={user.userImage}
                alt="Profile"
              />
            )}
            <h3>{user.userName}</h3>
            <div className="description-profile-page">
              <h2>
                Welcome, {user.firstName} {user.lastName}!
              </h2>
              <br />
              <h3>About you:</h3>
              <p>{user.description}</p>
              <br />
            </div>
          </>
        )}
        <div className="reviews_container">
          <button>
            <Link to="/newReview">Leave a Review</Link>
          </button>
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

export default Profile;
