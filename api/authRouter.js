const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const userModel = require('../model/userModel');

router.post('/register', async (req, res, next)=>{
    
    try{
        const newUser = await (req.body);
        const hash = bcrypt.hashSync(newUser.password, 12)
        
        newUser.Password = hash
        await userModel.insert(newUser)
        .then(resolve=>{
            res.json({message: 'Welcome User',
                newUser: newUser})
        })
        .catch(err=>{
            res.status(500).json({message: `Could not register, user already exists.`})
        })
    }
    
    catch (err){
        next(err);
        res.status(400).json({
            message: `Could not register new user.`
        })
    }
    
})

router.post('/login', (req, res)=>{
    res.status(200).json({message: `Hello from login`})
})

module.exports = router;