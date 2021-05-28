const express = require('express');
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth')


const router = express.Router();

const { Review } = require('../../db/models')
const { User } = require('../../db/models');
// const { formatNamedParameters } = require('sequelize/types/lib/utils');

//get all reviews
router.get('/', asyncHandler(async (req, res) => {

    const reviews = await Review.findAll()

    return res.json(reviews);
}));


//make new review
router.post('/', restoreUser, asyncHandler(async (req, res) => {
    const { content, userId, spotId } = req.body;
    // const name = req.user.username
    
    const newReview = await Review.create({ content, userId: userId, spotId:spotId });


    return res.json(
        newReview
    );
}))

//edit review
router.put('/', restoreUser, asyncHandler(async (req, res) => {

    const {reviewId, userId} = req.body
    if (userId) {
        const { content } = req.body

        const updatedReview = await Review.findByPk(reviewId)
        updatedReview.update({content})

    }

    const reviews = await Review.findAll()
    return res.json(reviews)
}))


//delete review
router.delete('/', restoreUser, asyncHandler(async (req, res) => {
    const {reviewId, userId} = req.body
    if (userId) {
        const deletedReview = await Review.findByPk(reviewId)
        await deletedReview.destroy()
    }

    const reviews = await Review.findAll()
    return res.json(reviews)
}))

module.exports = router;