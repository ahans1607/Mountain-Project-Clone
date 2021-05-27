import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../store/review';
import './reviewDisplay.css';

export default function ReviewDisplay() {
    const dispatch = useDispatch();

    const reviews = useSelector((state) => Object.values(state.reviews))


    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    return (
        <div className="reviewContainer">
            <div className="reviewTitle">
                Reviews:
            </div>
            <div className="reviewContent">
                {reviews.map((review) => 
                    <p>{review.content}</p>
                )}
            </div>
        </div>
    )


}
