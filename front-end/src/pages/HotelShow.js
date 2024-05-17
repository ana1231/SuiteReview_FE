import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

const HotelShow=(props)=>{

    const params = useParams()

    const mongoID = params.id
    const backendURL = props.URL + "hotels/" + mongoID


    // create state to hold hotels
    const [hotels, setHotels] = useState(null)

            
    //=========
    // Get Data
    //=========

    const getHotelsData = async () => {
        //make api call and get response
        const response = await fetch(backendURL)
        // turn response into javascript object
        const data = await response.json()
        console.log(data)
        // set the hotels state to the data
        //console.log(data)
        setHotels(data)
    }


    // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => {getHotelsData()}, []);

    
    // define a function that will return the JSX needed once we get the data
    const loaded = () => {
        return (
        <div className = "hotel" >
            
           
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
        )
    }


    return hotels ? loaded() : <h1>Loading...</h1>


}

export default HotelShow
