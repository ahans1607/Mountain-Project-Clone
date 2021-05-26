const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Spot } = require("../../db/models")


router.get('/', asyncHandler(async(req, res, next) => {
    const spot = await Spot.findAll()
  
    return res.json(spot)
    
  }));
  
module.exports = router  