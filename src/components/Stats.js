export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((itm) => itm.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have got everything! Read to go ✈️"
          : `💼 you have ${numItems} elements on your list, and you have packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
