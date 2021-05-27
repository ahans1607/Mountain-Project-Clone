import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSpots } from '../../store/spots';
import ReviewForm from "../ReviewForm"
import ReviewContent from "../ReviewDisplay"
import './spotPage.css';
import ReviewDisplay from '../ReviewDisplay';

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
                <div className="spot-container1">
                        <div className="spotPics">
                                {spot.picture.split(",").map((pic) => (
                                    <img src={pic} alt={spot.name}></img>
                                ))}
                        </div>
                </div>
                <div className="spot-container2">
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
                </div>

                <div className="spot-container3">
                    <div className="reviews">
                        <ReviewForm spotId={spotsId}/>
                        <ReviewDisplay />
                    </div>
                </div>
                
            </div>

        </>
    )

}

export default SpotPage;