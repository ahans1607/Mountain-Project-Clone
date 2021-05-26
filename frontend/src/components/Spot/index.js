import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSpots, spotsReducer } from '../../store/spots';
import './spot.css';

const Spot = ({spot}) => {
    const dispatch = useDispatch();
    const spots = useSelector(state => Object.values(state.spots))

    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch]);

    console.log(spots)


    return (
        <>
            <div className="master-div">
                <button className="spot-container">
                    <div>
                        <Link to={`spots/${spot.id}`}>
                            <div>
                                <h1> {spot.name} </h1>
                            </div>
                        </Link>
                    </div>
                </button>
            </div>

        </>
    )

}

export default Spot;