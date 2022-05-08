const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt')
const user = require("../models/User");
 


router.post("/", async (req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        await user.create({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        
        })
            .then(() => {
              
                res.status(201).send({
                    status: true,
                    message: "Registered successfully",
                });

            })
            .catch((e) => {
                res.status(400).send({
                    status: false,
                    message: "Bad request",
                });
            });
    } catch (e) {
        res.status(500).send({
            status: false,
            message: "Error while adding details",
        });
    }
});

module.exports = router;
