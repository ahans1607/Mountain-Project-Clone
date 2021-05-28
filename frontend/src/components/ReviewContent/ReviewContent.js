import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews, editReview, deleteReview } from '../../store/review';


import './reviewContent.css';

export default function ReviewContent({review, spotId}) {
    const dispatch = useDispatch();

    const reviews = useSelector((state) => Object.values(state.reviews))
    const userId = useSelector((state) => state.session.user.id)

    const filterdReviews = reviews.filter((singleReview) => (
        singleReview.spotId === +spotId
    ))

    
    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])
    
    const deleteHandler = (reviewId, userId) => {
        dispatch(deleteReview(reviewId, userId))
        window.location.reload()
    }

    const editHandler = (reviewId, userId) => {
        dispatch(editReview(reviewId, userId))
        window.location.reload()
    }

    return (
        <div className="reviewContainer">
            <div className="reviewTitle">
            </div>
            <div className="reviewContent">
                {filterdReviews.map((review) => 
                    <p>{review.content}
                        <button>Edit</button>
                        <button
                        onClick={() => (deleteHandler(review.id, userId))}>
                            Delete</button>
                    </p>
                )}
            </div>
        </div>
    )


}