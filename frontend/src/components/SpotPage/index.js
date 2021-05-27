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
                <div className="spot-container">
                        <h1 className="spotName"> {spot.name} </h1>

                            <div className="spotLocation">
                                <h2>Location: {spot.location}</h2>
                            </div>

                            <div className="spotType">
                                <p>Type: {spot.type}</p>
                            </div>

                            <div className="spotGrade">
                                <p>Grade: {spot.grade}</p>
                            </div>

                            <div className="spotDes">
                                <p>Description: {spot.description} </p>
                            </div>
                            
                            {/* <div className="spotPics">
                                {spot.picture.split(",").map((pic) => (
                                    <img src={pic} alt={spot.name}></img>
                                ))}
                            </div> */}

                </div>
            </div>

        </>
    )

}

export default SpotPage;