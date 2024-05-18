import { useState, useEffect } from "react"

import DeleteButton from "./DeleteButton"
import UpdateButton from "./UpdateButton"


// <OneReview 
// review = {review}
// updateReview = {updateReview}
// deleteReview = {deleteReview}/>


const OneReview =(props)=>{
    //console.log(props)
    return(

        <div className="oneReview">
            <h4>Rating: {props.review.rating}</h4>
            <h4>Description: {props.review.description}</h4>

            <DeleteButton 
                onClick={()=>props.deleteReview(props.review._id)} 
                review = {props.review}
                />
            <UpdateButton {...props} />
        </div>
    )


}

export default OneReview