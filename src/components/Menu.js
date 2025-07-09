import React, { useState } from 'react';

const breakfast = ["Grilled Sandwich", "Dhokla", "Aloo Paratha"];
const lunch = ["Chole Bhature", "Dal Makhni", "Rajma Chawal"];
const dinner = ["Paneer Butter Masala", "Chicken Biryani", "Naan"];

function Menu() {
  const [mealType, setMealType] = useState("breakfast");

  const getMenu = () => {
    switch (mealType) {
      case "lunch": return lunch;
      case "dinner": return dinner;
      default: return breakfast;
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Menu - {mealType}</h2>
      
      <div className="space-x-2 mb-4">
        <button onClick={() => setMealType("breakfast")} className="px-2 py-1 bg-gray-300 rounded">Breakfast</button>
        <button onClick={() => setMealType("lunch")} className="px-2 py-1 bg-gray-300 rounded">Lunch</button>
        <button onClick={() => setMealType("dinner")} className="px-2 py-1 bg-gray-300 rounded">Dinner</button>
      </div>
      <p>Coming soon: Menu items with filters and categories.</p>
      
      <ul className="list-disc ml-6">
        {getMenu().map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;

