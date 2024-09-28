// src/components/MealList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MealList = () => {
    const [meals, setMeals] = useState([]);

    const fetchMeals = async () => {
        const res = await axios.get('http://localhost:5000/api/meals');
        setMeals(res.data);
    };

    useEffect(() => {
        fetchMeals();
    }, []);

    return (
        <ul>
            {meals.map((meal) => (
                <li key={meal._id}>
                    {meal.name}: {meal.calories} Calories
                </li>
            ))}
        </ul>
    );
};

export default MealList;
