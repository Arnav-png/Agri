const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const user = require("../models/User");


router.post("/", async (req, res) => {
    user.findOne({ email: req.body.email })
        .exec()
        .then(user => {
            if (!user) {
                return res.status(401).send({
                    status: false,
                    message: "user not found !",
                })
            }
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (!result) {
                    res.status(401).send({
                        status: false,
                        message: "wrong password"
                    })
                }

                if (result) {
                    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: 2 * 24 * 60 * 60 })
                    res.status(201).json(
                        {
                            // email: user.email,
                            token: token,
                            status: true,
                            message: 'loggin successful'

                        }
                    )
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                err: err.message
            })
        })
})




module.exports = router;
