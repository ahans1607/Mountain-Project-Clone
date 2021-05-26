import { csrfFetch } from './csrf';

const LOAD = 'spots/LOAD';


const load = spots => ({
    type: LOAD,
    spots
})

export const getSpots = () => async dispatch => {
    const res = await csrfFetch(`/api/spots`);

    if (res.ok) {
        const spots = await res.json();
        dispatch(load(spots))
        return spots
    }
};

const initialState = [];

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
         return action.spots
        }
        default:
            return state;
    }
}


export default spotsReducer;