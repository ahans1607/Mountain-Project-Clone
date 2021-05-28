import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews, editReview, deleteReview } from '../../store/review';
import './reviewContent.css';

export default function ReviewContent({review, spotId}) {
    const dispatch = useDispatch();

    const reviews = useSelector((state) => Object.values(state.reviews))

    const filterdReviews = reviews.filter((singleReview) => (
        singleReview.spotId === +spotId
    ))

    console.log(filterdReviews)

    

    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    const deleteHandler = () => {
        dispatch(deleteReview(review))
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
                        onClick={() => (deleteHandler())}>
                            Delete</button>
                    </p>
                )}
            </div>
        </div>
    )


}