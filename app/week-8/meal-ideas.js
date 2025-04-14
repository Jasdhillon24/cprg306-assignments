"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await res.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient).then(setMeals);
    }
  }, [ingredient]);

  return (
    <div className="bg-slate-800 p-4 rounded-lg w-full">
      <h2 className="text-lg font-bold mb-2 capitalize">
        Meal Ideas for: {ingredient || "None"}
      </h2>

      {meals.length === 0 ? (
        <p>No meal ideas found.</p>
      ) : (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="flex items-center gap-4 bg-slate-700 p-2 rounded"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-16 h-16 object-cover rounded"
              />
              <span>{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
