//import { useState, useEffect } from "react"

import DeleteButton from "./DeleteButton"
import UpdateButton from "./UpdateButton"
import hotelData from "../data"





const OneReview =(props)=>{


    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const obj = hotelData.find( (set)=>set.value ===props.review.hotel_Id) 

    //console.log(obj)

    const reviewHotelName = obj.label

    //console.log(props)
    return(

        <div className="oneReview">

        {(props.loggedIn && (Number(props.userIdLoggedIn) === Number(props.review.user_Id)) && props.profileComponent )?  <h4>Hotel: {reviewHotelName}</h4>: null}
            <h4>Rating: {props.review.rating}</h4>
            <h4>Description: {props.review.description}</h4>




        {(props.loggedIn && (Number(props.userIdLoggedIn) === Number(props.review.user_Id)) )?
         <div>

            <DeleteButton 
                onClick={()=>props.deleteReview(props.review._id)} 
                review = {props.review}
                />
            <UpdateButton {...props} />
        </div>
        :
        null
        }

        </div>
    )


}

export default OneReview