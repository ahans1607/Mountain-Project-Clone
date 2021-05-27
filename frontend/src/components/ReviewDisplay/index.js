import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews, editReview, deleteReview } from '../../store/review';
import './reviewDisplay.css';

export default function ReviewDisplay() {
    const dispatch = useDispatch();

    const reviews = useSelector((state) => Object.values(state.reviews))


    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    useEffect(() => {
        dispatch(editReview())
    }, [dispatch])

    useEffect(() => {
        dispatch(deleteReview())
    }, [dispatch])

    return (
        <div className="reviewContainer">
            <div className="reviewTitle">
                Reviews:
            </div>
            <div className="reviewContent">
                {reviews.map((review) => 
                    <p>{review.content}
                        <button>Edit</button>
                        <button>Delete</button>
                    </p>
                )}
            </div>
        </div>
    )


}
