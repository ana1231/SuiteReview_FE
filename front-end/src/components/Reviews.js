import { useState, useEffect } from "react"
import OneReview from "./OneReview"

//pull in prop - profileComponent
const Reviews = ({hotel_Id, review_Id, user_Id, URL}) =>{

    // create state to hold reviews
    const [reviews, setReviews] = useState(null)



    //=========
    // Get Data
    //=========

    const getReviewsData = async (hotel_Id) =>{

        const backendURLHotel = URL + "reviews/" + hotel_Id

        //make api call and get response
        const response = await fetch(backendURLHotel)
        // turn response into javascript object
        const data = await response.json()
        console.log(data)

        setReviews(data)
    }


    //========================
    // Update, Delete
    //========================

    const updateReview = async (review, id) => {
        await fetch(URL + "reviews/" + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(review)
        })
        getReviewsData(hotel_Id)
    }

    const deleteReview = async (id) => {
        await fetch(URL + "reviews/" + id, {
            method: "delete"
        })
        getReviewsData(hotel_Id)
    }




    // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => {getReviewsData(hotel_Id) }, [])

    const loaded = () => {
        return reviews.map((reviews,index) => 
        
                    
            <div className = "review" key={reviews._id}>
                

                <OneReview 
                    review = {reviews}
                    updateReview = {updateReview}
                    deleteReview = {deleteReview}/>
                
            </div>
            
        )
            
        
    }

    return (reviews) ? loaded(): <h1>Loading...</h1>

}

export default Reviews