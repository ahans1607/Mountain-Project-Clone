const express = require("express");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");
const { logoutUser} = require('../auth')

const { asyncHandler, csrfProtection } = require("./utils");

const router = express.Router();


