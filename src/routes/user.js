const express = require('express');
const router=express.Router();

const controller = require('../controllers/UserController')
//middleware
router.use((req,res ,next) => {
    console.log("Time : ",Date.now() )
    next();
})

router.get('/all',controller.getUsers)
router.post('/create',controller.createUser)


module.exports = router;
// router.post()

