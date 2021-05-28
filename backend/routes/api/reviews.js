const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth, restoreUser } = require('../../utils/auth')

const router = express.Router();

const { Review } = require('../../db/models')
const { User } = require('../../db/models')

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

    if (req.user.id === req.body.user_id) {
        const { newDescription } = req.body

        const updatedReview = await Review.findByPk()
        updatedReview.content = newContent
        await updatedReview.save()

    }

    const reviews = await Review.findAll()
    return res.json(reviews)
}))


//delete review
router.delete('/', restoreUser, asyncHandler(async (req, res) => {
    if (req.user.id === req.body.user_id) {
        const deletedReview = await Review.findByPk(req.body.id)
        await deletedReview.destroy()
    }

    const reviews = await Review.findAll()
    return res.json(reviews)
}))

module.exports = router;