export default function Item({ name, quantity, category }) {
    return (
      <li className="bg-slate-800 p-4 mb-2 rounded shadow-md">
        <p className="font-bold capitalize">{name}</p>
        <p className="text-sm text-gray-300">Buy {quantity} in {category}</p>
      </li>
    );
  }
  