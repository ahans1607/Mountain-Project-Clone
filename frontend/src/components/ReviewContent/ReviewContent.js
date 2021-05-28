import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews, editReview, deleteReview } from '../../store/review';


import './reviewContent.css';

export default function ReviewContent({reviewId, spotId}) {
    const dispatch = useDispatch();

    const reviews = useSelector((state) => Object.values(state.reviews))
    const userId = useSelector((state) => state.session.user.id)

    const filterdReviews = reviews.filter((singleReview) => {
        if (!singleReview){
            return null;
        }
        return singleReview.spotId === +spotId
    })

    
    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])
    
    const deleteHandler = (userId, reviewId) => {
        dispatch(deleteReview(userId, reviewId))
        window.location.reload()
    };

    const [editedReview, setEditedReview] = useState(" ");

    const editHandler = (reviewId, userId, editedReview) => {
        dispatch(editReview(reviewId, userId, editedReview))
        window.location.reload();
    };

    // let isEditing;
    // let hidden;

    // if(isEditing) {
    //     hidden = "block"
    // } else {
    //     hidden = "none"
    // }

    // const editSwitch = () => {
    //     if(isEditing){
    //         isEditing = false
    //     } else {
    //         isEditing = true
    //     }
    // }


    return (
        <div className="reviewContainer">
            <div className="reviewTitle">
            </div>
            <div className="reviewContent">
                {filterdReviews.map((review) =>
                <div> 
                    <div style= {{display:"hidden"}} id="f*This">
                        <form onSubmit={editHandler}>
                            <textarea
                                type="textarea"
                                value={editedReview} 
                                onChange={(e) => setEditedReview(e.target.value)} 
                                >
                            </textarea>
                            <button
                                onClick={(e) => {editHandler(review.id, userId, editedReview)
                                e.preventDefault()
                                document.getElementById("f*This").style.display = "none"}}>
                                    Edit</button>
                        </form>
                    </div> 
                        <p>{review.content}
                            <button
                            onClick={() => (document.getElementById("f*This").style.display = "block")}>
                                Edit</button>
                            <button
                            onClick={() => (deleteHandler(userId, review.id))}>
                                Delete</button>
                        </p>
                </div>
                )}
            </div>
        </div>
    )


}