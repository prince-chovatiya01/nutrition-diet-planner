// src/App.js
import React from 'react';
import MealForm from './components/MealForm';
import MealList from './components/MealList';

const App = () => {
    return (
        <div>
            <h1>Nutrition and Diet Planner</h1>
            <MealForm />
            <MealList />
        </div>
    );
};

export default App;
