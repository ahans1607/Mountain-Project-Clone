import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../store/review"


function ReviewForm({spotId}) {
    const dispatch = useDispatch();

    const [review, setReview] = useState("");
    const [errors, setErrors] = useState([]);

    const userId = useSelector(state => state.session.user.id)
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      const newReview = {
            spotId:  +spotId,
            userId,
            content: review
      }
      setReview("")
      dispatch(addReview(newReview))
    };
  
    return (
      
      <div className="reviewFormContain">
          <h2>
            Have you been here?
          </h2>
          <h3>
            Add a Review
          </h3>
        <form onSubmit={handleSubmit}>
          <textarea
            type="textarea"
            value={review} 
            onChange={(e) => setReview(e.target.value)} >
          </textarea>
        <button type="submit">Add Review</button>
        </form>
      </div>
    );
  }
  
  export default ReviewForm;