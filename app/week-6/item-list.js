"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div className="w-full max-w-2xl">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-xl font-semibold text-white">Sort by:</h2>
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded text-white font-medium ${
            sortBy === "name" ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded text-white font-medium ${
            sortBy === "category" ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
