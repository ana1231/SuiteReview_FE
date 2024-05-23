import { useState, useEffect } from "react"
import Reviews from "../components/Reviews"


const ProfileTest = (props)=>{

    console.log(props.userIdLoggedIn)
    console.log(props)

    // create state to hold reviews
    const [reviews, setReviews] = useState(null)

    //=========
    // Get Data
    //=========

    const getReviewsData = async (user_Id) =>{
        //getting list of reviews for this specific user.
        const backendURLReviews = props.URL + "reviews/user/" + user_Id
    

        //make api call and get response
        const response2 = await fetch(backendURLReviews)
        // turn response into javascript object
        const data2 = await response2.json()
        console.log(data2)
        // set the hotels state to the data
        //console.log(data)
        setReviews(data2)
    }

    useEffect(() => {getReviewsData(props.userIdLoggedIn) }, [])

    const loaded = () => {
        return (
            <div className = "reviews_container">
            <Reviews 
                    hotel_Id={null} 
                    userIdLoggedIn = {props.userIdLoggedIn}
                    URL = {props.URL}
                    loggedIn = {props.userIdLoggedIn ? true:false}
                    profileComponent = {true}
                />
            </div>
        )
    }

    return reviews ? loaded(): <h1>Loading...</h1>

}

export default ProfileTest