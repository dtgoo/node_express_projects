const express = require('express');
const router = express.Router();
// express.Router() is often referred to as a mini-app 
const {getAllTasks} = require('../controllers/tasks');


router.route('/').get(getAllTasks);

module.exports = router; 


