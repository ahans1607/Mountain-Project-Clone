import { csrfFetch } from './csrf';

//actions
const LOAD = "reviews/LOAD";
const ADD = "reviews/ADD";

//action creators
const load = list => ({
    type: LOAD,
    list
});

const add = newReview => ({
    type: ADD,
    newReview
})


export const getReviews = () => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews`);
    if (res.ok) {
        const reviews = await res.json();
        dispatch(load(reviews));
        return reviews
    }
};

export const addReview = (newReview) => async (dispatch) => {
    newReview = JSON.stringify(newReview)
    const res = await csrfFetch(`/api/reviews`, {
        method: "POST",
        body: newReview,
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (res.ok) {
        const reviews = await res.json();
        dispatch(load(reviews));
        return reviews
    }
};


const initialState = {};

//REVIEWS REDUCER
const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allReviews = {};
            action.list && action.list.forEach(review => {
                allReviews[review.id] = review;
            });
            return {
                ...allReviews,
                ...state
            };
        }

        case ADD: {
            const newState = { ...state }
            newState[action.newReview] = action.newReview
            return newState
        }

        default:
            return state
    }
}

export default reviewsReducer;