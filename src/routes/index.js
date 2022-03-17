const express = require('express');
const router=express.Router();

const controller = require('../controllers/HomeController')

router.use((req,res ,next) => {
    console.log("Time : ",Date.now() )
    next();
})

router.get('/home',controller.index)


module.exports = router;
// router.post()

