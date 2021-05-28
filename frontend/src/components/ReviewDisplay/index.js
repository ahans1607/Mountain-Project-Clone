import ReviewContent from '../ReviewContent/ReviewContent'
import ReviewForm from '../ReviewForm'



export default function ReviewDisplay({ reviews, spotId }) {


    // const allReview = Object.values(reviews)

    return (
        <div className='reviewDisplayContain'>
            <h2>Reviews</h2>
             <ReviewContent spotId={spotId}/>
        </div>
    )

}
