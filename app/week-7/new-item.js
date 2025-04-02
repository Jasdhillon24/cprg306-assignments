"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };

    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-4 rounded-lg w-full max-w-md mb-6"
    >
      <div className="mb-4">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          className="w-full p-2 text-black rounded"
        />
      </div>
      <div className="flex gap-4 mb-4">
        <div className="flex items-center justify-between bg-white p-2 rounded w-1/2">
          <span className="text-black">{quantity}</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="bg-blue-500 text-white px-2 rounded hover:bg-blue-700"
            >
              -
            </button>
            <button
              type="button"
              onClick={() => setQuantity(Math.min(20, quantity + 1))}
              className="bg-blue-500 text-white px-2 rounded hover:bg-blue-700"
            >
              +
            </button>
          </div>
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-1/2 p-2 text-black rounded"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white w-full p-2 rounded text-xl"
      >
        +
      </button>
    </form>
  );
}
