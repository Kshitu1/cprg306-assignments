export default function Item({ name, quantity, category }) {
    return (
      <div className="bg-gray-700 p-4 m-2 rounded-lg shadow-lg text-white w-1/5">
        <div className="font-bold">{name}</div>
        <div>Buy {quantity} in {category}</div>
      </div>
    );
  }
  