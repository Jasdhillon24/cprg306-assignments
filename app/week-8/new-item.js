"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      name,
      quantity,
      category,
    };

    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 p-4 rounded-lg w-full max-w-md"
    >
      <label className="block text-md font-semibold mb-1">Add New Item</label>
      <input
        placeholder="Item name"
        className="text-black w-full p-1 mb-2 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <div className="flex gap-2 mb-2">
        <div className="flex gap-1 items-center">
          <button
            type="button"
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            className="bg-gray-400 text-black px-2 rounded"
          >
            -
          </button>
          <input
            type="number"
            className="w-12 text-black text-center rounded"
            value={quantity}
            readOnly
          />
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="bg-blue-500 text-white px-2 rounded"
          >
            +
          </button>
        </div>

        <select
          className="text-black p-1 rounded w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Produce</option>
          <option>Dairy</option>
          <option>Bakery</option>
          <option>Meat</option>
          <option>Frozen Foods</option>
          <option>Canned Goods</option>
          <option>Dry Goods</option>
          <option>Household</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded"
      >
        +
      </button>
    </form>
  );
}
