import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { addReview } from "../../store/review"
import SignupFormPage from "../SignupFormPage";
import { useParams } from "react-router-dom"


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
      dispatch(addReview(newReview))
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label>
          Review
          <textarea
            type="textarea"
            value={review} 
            onChange={(e) => setReview(e.target.value)} >
          </textarea>
        </label>
        <button type="submit">Add Review</button>
      </form>
    );
  }
  
  export default ReviewForm;