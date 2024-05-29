

// <DeleteButton 
// onClick={()=>props.deleteReview(props.review._id)} 
// review = {props.review}
// /> 

const DeleteButton=(props)=>{

    //console.log('DeleteButton Component Executing')
    
    return(
        <button onClick={props.onClick} className="delete-button">
            Delete Review
        </button>
    )

}

export default DeleteButton