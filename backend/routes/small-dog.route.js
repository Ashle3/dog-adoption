const express = require('express');
const router = express.Router();

const smallDogsController = require('../controllers/small-dog.controller');

router.get('/small', smallDogsController.getAll);

router.post('/small', smallDogsController.addSmallDog);

module.exports = router;
