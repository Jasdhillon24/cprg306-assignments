export default function Item({ name, quantity, category, onSelect }) {
    return (
      <li
        className="bg-slate-800 p-3 rounded cursor-pointer"
        onClick={onSelect}
      >
        <strong className="capitalize">{name}</strong>
        <p className="text-sm">Buy {quantity} in {category.toLowerCase()}</p>
      </li>
    );
  }
  