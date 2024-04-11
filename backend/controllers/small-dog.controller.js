const express = require('express');
const router = express.Router();

const app = express();

const smallDog = require('../models/small-dog');

const getAll = app.get('/small', (req, res, next) => {
  smallDog.find();
  res.status(200).json({
    message: "Get requests successful!",
    smallDogs: smallDogs
  });
});

const addSmallDog = async (req, res) => {
    const newDog = new smallDog({
        name: req.body.name,
        breed: req.body.breed,
        gender: req.body.gender,
        age: req.body.age,
        img: req.body.img
    });
    const result = await mongodb.getDb().db('dogs').collection('small').insertOne(newDog);
    if(result.acknowledged){
      res.status(201).json(result);
    } else {
      res.status(500).json(response.error || 'An error occurred while adding the dog.');
    }
  };

module.exports = {  getAll, addSmallDog };