import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSpots, spotsReducer } from '../../store/spots';
import './spotPage.css';

const SpotPage = () => {
    const dispatch = useDispatch();

    const Spots = useSelector(state => state.spots)
    const { spotsId } = useParams();

    
    const spot = Spots.find(s => s.id === +spotsId)
    //useParams comes in as text not as a number
    
    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch]);
    
    if(!spot) return (
        <h1> Spot not found </h1>
    )
    
    

    return (
        <>
            <div className="master-div">
                <button className="spot-container">
                    <div>
                        {spot.location}
                    </div>
                </button>
            </div>

        </>
    )

}

export default SpotPage;