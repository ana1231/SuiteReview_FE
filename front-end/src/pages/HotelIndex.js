import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const HotelIndex=(props)=>{


    // create state to hold hotels
    const [hotels, setHotels] = useState(null)

          
    //=========
    // Get Data
    //=========

    // =======================================
    //              BACKEND ROUTES
    // =======================================

    // Action    URL                   HTTP Verb     Explaination
    //______________________________________________________________________________________
    // Index     /hotels/                GET         returns all hotels

    const getHotelsData = async () => {
        //make api call and get response
        const response = await fetch(props.URL + "hotels")
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
        
        <div className="HotelIndexContainer">

        
            {hotels.map((hotels) => (
            <div className = "hotels" key={hotels.name}>
                
                <Link to = {`/hotels/${hotels._id}`}>
                    <h3>{hotels.name}</h3>
                </Link>
                <h4>{hotels.city}, {hotels.state}</h4>
                <div className = "hotels_img">
                    <img src={hotels['images'][0]} alt={hotels.name} />
                    <img src={hotels['images'][1]} alt={hotels.name}/>
                    <img src={hotels['images'][2]} alt={hotels.name}/>
                </div>
                <h4>Rating: {hotels.ave_rating}</h4>





            </div>

        
        ))}

        </div>)
    }


    return hotels ? loaded() : <h1>Loading...</h1>
}


export default HotelIndex