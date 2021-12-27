const express = require('express');
const router = express.Router();
// express.Router() is often referred to as a mini-app 

router.route('/').get((req,res) => {
    res.send('all items')
})

module.exports = router; 


