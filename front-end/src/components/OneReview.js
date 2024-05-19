//import { useState, useEffect } from "react"

import DeleteButton from "./DeleteButton"
import UpdateButton from "./UpdateButton"





const OneReview =(props)=>{
    const hotelData= [
        {value : 0 , label:'Grand Hotel'},
        {value : 1 , label:'Ocean View Resort'},
        {value : 2 , label:'Mountain Lodge'},
        {value : 3 , label:'Lakeside Inn'},
        {value : 4 , label:'Sunset Resort'},
        {value : 5 , label:'Ski Chalet'},
        {value : 6 , label:'Beachfront Paradise'},
        {value : 7 , label:'City Center Hotel'},
        {value : 8 , label:'Riverside Retreat'},
        {value : 9 , label:'Desert Oasis Resort'}

        
    ]

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