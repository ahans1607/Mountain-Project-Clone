import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Spot from '../Spot/index';
import { getSpots } from '../../store/spots';

function Homepage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const spots = useSelector(state => state.spots);


    useEffect(() => {
        dispatch(getSpots());
    }, [dispatch]);

    if (!sessionUser) return (
        <Redirect to="/login" />
    );

    if (!spots) {
        return null;
    }


    return (
        <>
            <div className="home-page-container">
                <div className="home-master">
                    {spots.map((spot) => {
                        return (
                            <Spot spot={spot} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Homepage;