const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const userModel = require('../model/userModel');
const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets');

//POST - Registers a new user
router.post('/register', async (req, res) => {
  try{
    const newUser = await (req.body);
    const hash = bcrypt.hashSync(newUser.password, 12)
    newUser.password = hash
    await userModel.insert(newUser)
    .then(resolve=>{
        res.json({message: 'Welcome User',
            newUser: newUser});
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message: `Could not register, user already exists.`})
    })
}
catch (err){
    res.status(400).json({
        message: `Could not register new user.`,
    });
}

});


//POST - Logs user in

router.post('/login', async (req, res, next )=>{

    const { username, password } = req.body;
    let user = await userModel.getBy({username})
    let passwordsMatch = bcrypt.compareSync(password, user[0].password)

    if(user.length !== 0 && passwordsMatch){
        req.session.user = user[0];
        req.session.token = generateToken(user);

        res.status(200).json(req.session)
    }else{
        res.status(401).json({message: `You are not authorized`})
    }

});

//GET - Logs user out
router.get('/logout', async (req, res)=>{

    req.session.destroy(err=>{
        if(err){
            res.status(200).json({err: err})
        }else{
            res.status(200).json({message: `Session destroyed, user has been logged out.`})
        }
    })
})
    


//Token Generator
function generateToken(user) {
    const payload = {
        subject: user.id, 
        username: user.username,
        company: user.company
    };
    const options = {
        expiresIn: '1d', 
    };
    return jwt.sign(payload, secrets.jwtSecret, options); 
    }


module.exports = router;