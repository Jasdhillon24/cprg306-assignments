"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div className="w-full max-w-md">
      <div className="flex gap-2 mb-2">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded"
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1 px-3 rounded"
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>

      <ul className="space-y-2">
        {sortedItems.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
}
