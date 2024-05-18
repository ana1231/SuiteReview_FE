import { Link } from "react-router-dom"

// <OneReview 
// review = {review}
// updateReview = {updateReview}
// deleteReview = {deleteReview}/>

//https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button

const UpdateButton = (props)=>{

    return(
        
        <Link to = {`/reviews/${props.review._id}`}>
            <button>
                Update
            </button>
        </Link>

    )
}

export default UpdateButton