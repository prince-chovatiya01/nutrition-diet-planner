// src/components/MealForm.js
import React, { useState } from 'react';
import axios from 'axios';

const MealForm = () => {
    const [meal, setMeal] = useState({
        name: '',
        calories: '',
        protein: '',
        fats: '',
        carbohydrates: '',
        vitamins: '',
        minerals: '',
    });

    const handleChange = (e) => {
        setMeal({ ...meal, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/meals', meal);
        setMeal({
            name: '',
            calories: '',
            protein: '',
            fats: '',
            carbohydrates: '',
            vitamins: '',
            minerals: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Meal Name" onChange={handleChange} required />
            <input type="number" name="calories" placeholder="Calories" onChange={handleChange} required />
            <input type="number" name="protein" placeholder="Protein" onChange={handleChange} required />
            <input type="number" name="fats" placeholder="Fats" onChange={handleChange} required />
            <input type="number" name="carbohydrates" placeholder="Carbohydrates" onChange={handleChange} required />
            <input type="text" name="vitamins" placeholder="Vitamins" onChange={handleChange} />
            <input type="text" name="minerals" placeholder="Minerals" onChange={handleChange} />
            <button type="submit">Add Meal</button>
        </form>
    );
};

export default MealForm;
