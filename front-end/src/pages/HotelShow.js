import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import Reviews from "../components/Reviews"

const HotelShow=(props)=>{

    const params = useParams()

    const mongoID = params.id
    const backendURLHotel = props.URL + "hotels/" + mongoID

    // create state to hold reviews
    const [reviews, setReviews] = useState(null)


    // create state to hold hotels
    const [hotels, setHotels] = useState(null)


            
    //=========
    // Get Data
    //=========


    const getReviewsData = async (hotel_Id) =>{

        const backendURLHotel = props.URL + "reviews/" + hotel_Id

        //make api call and get response
        const response2 = await fetch(backendURLHotel)
        // turn response into javascript object
        const data2 = await response2.json()
        console.log(data2)
        // set the hotels state to the data
        //console.log(data)
        setReviews(data2)
    }


    const getHotelsData = async () => {
        //make api call and get response
        const response = await fetch(backendURLHotel)
        // turn response into javascript object
        const data = await response.json()
        console.log(data)
        // set the hotels state to the data
        //console.log(data)
        setHotels(data)
        getReviewsData(data.hotel_Id)
    }

    // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => {getHotelsData() }, [])


        
    


    // define a function that will return the JSX needed once we get the data
    const loaded = () => {
        return (
        <div className = "hotel" >
            
           <div className = "hotel_container">
            
                <h2>{hotels.name}</h2>

                <div className = "hotel_img">
                    <img src={hotels['images'][0]} />
                    <img src={hotels['images'][1]} />
                    <img src={hotels['images'][2]} />
                </div>

                <h4>Rating: {hotels.ave_rating}</h4>

                <h4>{hotels.address}</h4>
                <h4>{hotels.city}, {hotels.state}</h4>

                <p>{hotels.description}</p>

            </div>

           
            <div className = "reviews_container">
            
                <Reviews 
                    hotel_Id={hotels.hotel_Id} 
                    review_Id = {reviews._id}
                    user_Id = {reviews.user_Id}
                    URL = {props.URL}
                    //profileComponent = false
                    
                />
                
            </div>

        </div>
        )
    }


    return (hotels && reviews) ? loaded(): <h1>Loading...</h1>


}

export default HotelShow
