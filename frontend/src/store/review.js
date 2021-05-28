import { csrfFetch } from './csrf';

//actions
const LOAD = "reviews/LOAD";
const ADD = "reviews/ADD";
const EDIT = "reviews/EDIT";
const DELETE = "reviews/DELETE"

//action creators
const load = list => ({
    type: LOAD,
    list
});

const add = newReview => ({
    type: ADD,
    newReview
});

const edit = editedReview => ({
    type: ADD,
    editedReview
});

const del = reviewId => ({
    type: DELETE,
    reviewId
})


export const getReviews = () => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews`);
    if (res.ok) {
        const reviews = await res.json();
        dispatch(load(reviews));
        // return reviews
    }
};

export const addReview = (newReview) => async (dispatch) => {
    newReview = JSON.stringify(newReview)
    console.log(newReview)
    const res = await csrfFetch(`/api/reviews`, {
        method: "POST",
        body: newReview,
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (res.ok) {
        const reviews = await res.json();
        dispatch(add(reviews));
        // return reviews
    }
};

export const deleteReview = (reviewId, userId) => async (dispatch) => {
    // review = JSON.stringify(review)
    const res = await csrfFetch(`/api/reviews`, {
        method: "DELETE",
        body: JSON.stringify({reviewId, userId}),
        headers: {
            'Content-Type': "application/json"
        }
    });

    if (res.ok) {
        const reviews = await res.json();
        dispatch(del(reviews));
    }

}


export const editReview = (content) => async (dispatch) => {
    content = JSON.stringify(content)
    
    const res = await csrfFetch(`/api/reviews`, {
        method: "PUT",
        body: content,
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (res.ok) {
        const reviews = await res.json();
        dispatch(edit(reviews));
    }
};


const initialState = {};

//REVIEWS REDUCER
const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allReviews = {};
            action.list.forEach(review => {
                allReviews[review.id] = review;
            });
            return allReviews
        }

        case ADD: {
            const newState = { ...state }
            newState[action.newReview] = action.newReview
            return newState
        }

        case DELETE: {
            const newState = { ...state }
            delete newState[action.reviewId]
            return newState
        }
        
        case EDIT: {
            const newState = { ...state }
            newState[action.newReview] = action.newReview
            return newState
        }


        default:
            return state
    }
}

export default reviewsReducer;