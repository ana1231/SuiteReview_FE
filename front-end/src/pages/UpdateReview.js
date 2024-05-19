import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Select from 'react-select'

const UpdateReview =  (props) => {

    // used for react-select
    //dropdown
    const hotelData= [
        {value : 0 , name:"hotel_Id", label:'Grand Hotel'},
        {value : 1 , name:"hotel_Id", label:'Ocean View Resort'},
        {value : 2 , name:"hotel_Id", label:'Mountain Lodge'},
        {value : 3 , name:"hotel_Id", label:'Lakeside Inn'},
        {value : 4 , name:"hotel_Id", label:'Sunset Resort'},
        {value : 5 , name:"hotel_Id", label:'Ski Chalet'},
        {value : 6 , name:"hotel_Id", label:'Beachfront Paradise'},
        {value : 7 , name:"hotel_Id", label:'City Center Hotel'},
        {value : 8 , name:"hotel_Id", label:'Riverside Retreat'},
        {value : 9 , name:"hotel_Id", label:'Desert Oasis Resort'}
    ]


    const params = useParams()
    const navigate = useNavigate()

    // create state to hold review
    const [review, setReview] = useState(null)
   
    // create state to hold form
    const [updateForm, setUpdateForm] = useState({
        hotel_Id: '', 
        user_Id:  '', 
        rating:  '',  
        description: ''
    })

    const mongoID = params.id
    const backendURLReview = props.URL + "reviews/review/" + mongoID

    //=========
    // Get Data
    //=========
    
    // =======================================
    //              ROUTES
    // =======================================

    // Action    URL                   HTTP Verb     Explaination
    //______________________________________________________________________________________
    // Show      /reviews/review/:id     GET         returns one review
    // Update    /reviews/:id            PUT         updates a particular review



    //https://react.dev/learn/updating-objects-in-state
    const getReviewsData = async () =>{

        //make api call and get response
        const response = await fetch(backendURLReview)
        // turn response into javascript object
        const data = await response.json()
        console.log(data)

        //console.log(data)
        setReview(data)
        setUpdateForm({
            ...updateForm,
            user_Id: data.user_Id,
            hotel_Id: data.hotel_Id
        })
    }

    //========================
    // Update
    //========================

    const updateReview = async (review, id) => {
        console.log(`in upate/put, sending`)
        console.log(review)
        await fetch(props.URL + "reviews/" + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(review)
        })

    }

    //=========
    // Handlers
    //=========

    const handleChange = (event) => {
        setUpdateForm(prev => ({
            ...prev, 
            [event.target.name]: event.target.value
        }))
    }

    const handleDropDown =(e)=>{

        setUpdateForm(prev => ({
            ...prev, 
            hotel_Id: e.value
        }))

    }
    
    const fixFormTypes=()=>{
        setUpdateForm({
            ...updateForm,
            rating: Number(updateForm.rating),
            hotel_Id: Number(updateForm.hotel_Id)
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fixFormTypes()
        updateReview(updateForm, mongoID)
        navigate(`/hotels`)
    }

    // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => {getReviewsData() }, [])

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const loaded = () => {
        return (

            <div className="updateForm">
                <form onSubmit={handleSubmit}>
                    

                    <label>
                        Hotel:
                        <Select

                            onChange={handleDropDown}
                            options={hotelData}
                            name="hotel_Id"
                            defaultValue={hotelData.filter((hotel)=> {
                                return hotel.value === review.hotel_Id})}

                            
                        />


                    </label>

                    <label>
                        <br></br>
                        
                        Rating:

                        <input

                            type="text"
                            value={updateForm.rating}
                            name="rating"
                            placeholder={review.rating}
                            onChange={handleChange}


                        />
                        
                    </label>    

                    <label>
                        <br></br>
                        <br></br>
                        Description:

                        <input

                            type="text"
                            value={updateForm.description}
                            name="description"
                            placeholder={review.description}
                            onChange={handleChange}
                            
                        />   

                    </label>
                    <br></br>
     

                    <input type="Submit" value="Update Review" />            



                </form>
            </div>



        )
    }


    return review ? loaded(): <h1>Loading...</h1>



}

export default UpdateReview