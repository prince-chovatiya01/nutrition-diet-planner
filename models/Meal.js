// models/Meal.js
const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    name: { type: String, required: true },
    calories: { type: Number, required: true },
    protein: { type: Number, required: true },
    fats: { type: Number, required: true },
    carbohydrates: { type: Number, required: true },
    vitamins: { type: String },
    minerals: { type: String },
});

module.exports = mongoose.model('Meal', mealSchema);
