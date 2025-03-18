"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  // Function to increase quantity (max: 20)
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  // Function to decrease quantity (min: 1)
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center justify-center w-full mt-10">
      <div className="bg-white p-4 rounded-lg flex items-center justify-between shadow-lg w-48">
        {/* Number on the Left */}
        <span className="text-xl font-bold text-black"> {quantity} </span>

        {/* Buttons on the Right */}
        <div className="flex gap-2">
          <button
            onClick={decrement}
            disabled={quantity === 1}
            className={`px-4 py-2 text-white font-bold rounded ${
              quantity === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
            }`}
          >
            -
          </button>

          <button
            onClick={increment}
            disabled={quantity === 20}
            className={`px-4 py-2 text-white font-bold rounded ${
              quantity === 20 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
            }`}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
