const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const user = require("../models/User");


router.post("/", async (req, res) => {
    try {

        const token = await jwt.sign({ email: " " }, process.env.REFRESH_JWT_SECRET, { expiresIn: 1 })
        if(token){
            res.send('logout')
        }
    }catch(e){
res.send('error while logout')
    }
})







module.exports = router;
