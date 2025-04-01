"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = { name, quantity, category };
    console.log("New item:", item);
    alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#111827] text-white p-6 rounded-lg shadow-lg w-[28rem] space-y-4"
    >
      {/* Name Input */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Item name"
        className="w-full p-3 rounded text-black"
      />

      {/* Quantity + Category */}
      <div className="flex gap-4">
        {/* Quantity Controls */}
        <div className="flex items-center justify-between bg-white p-2 rounded w-1/2">
          <span className="text-black font-semibold">{quantity}</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className={`px-3 py-1 rounded text-white font-bold shadow ${
                quantity === 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-700"
              }`}
            >
              -
            </button>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className={`px-3 py-1 rounded text-white font-bold shadow ${
                quantity === 20
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-700"
              }`}
            >
              +
            </button>
          </div>
        </div>

        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-1/2 p-2 rounded text-black"
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

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded text-xl"
      >
        +
      </button>
    </form>
  );
}
