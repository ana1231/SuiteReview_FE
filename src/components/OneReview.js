import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";
import hotelData from "../data";

const OneReview = (props) => {
  const obj = hotelData.find((set) => set.value === props.review.hotel_Id);
  const reviewHotelName = obj.label;

  return (
    <div className="oneReview">
      {props.loggedIn &&
      Number(props.userIdLoggedIn) === Number(props.review.user_Id) &&
      props.profileComponent ? (
        <h4 className="review-heading">Hotel: {reviewHotelName}</h4>
      ) : null}
      <div className="review-details">
        <h4 className="review-rating">Rating: {props.review.rating}</h4>
        <p className="review-description"><strong>Description:</strong> {props.review.description}</p>
      </div>
      {props.loggedIn &&
      Number(props.userIdLoggedIn) === Number(props.review.user_Id) ? (
        <div className="review-actions">
          <DeleteButton
            onClick={() => props.deleteReview(props.review._id)}
            review={props.review} className="delete-button"
          />
          <UpdateButton {...props} className="update-button"/>
        </div>
      ) : null}
    </div>
  );
};

export default OneReview;
