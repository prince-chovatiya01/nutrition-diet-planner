// routes/mealRoutes.js
const express = require('express');
const Meal = require('../models/Meal');
const router = express.Router();

// Create a meal
router.post('/', async (req, res) => {
    const newMeal = new Meal(req.body);
    try {
        const savedMeal = await newMeal.save();
        res.status(201).json(savedMeal);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all meals
router.get('/', async (req, res) => {
    try {
        const meals = await Meal.find();
        res.status(200).json(meals);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
