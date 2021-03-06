import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSpots, spotsReducer } from '../../store/spots';
import './spot.css';

const Spot = ({spot}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch]);



    return (
        <>
            <div className="master-div">
                <button className="spot-container">
                    <div>
                        <Link to={`spots/${spot.id}`} style={{textDecoration: 'none'}}>
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