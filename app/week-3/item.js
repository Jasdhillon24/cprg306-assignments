const Item = ({ name, quantity, category }) => {
    return (
      <li className="bg-gray-900 text-white p-4 rounded-lg shadow-md">
        <p className="text-lg font-bold">{name}</p>
        <p className="text-sm text-gray-400">Buy {quantity} in {category}</p>
      </li>
    );
  };
  
  export default Item;
  