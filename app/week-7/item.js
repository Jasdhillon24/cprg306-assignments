export default function Item({ name, quantity, category }) {
    return (
      <li className="bg-slate-800 text-white p-4 rounded mb-2 w-full max-w-md">
        <p className="font-bold capitalize">{name}</p>
        <p className="text-sm text-gray-300">Buy {quantity} in {category}</p>
      </li>
    );
  }
  