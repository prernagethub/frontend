const categories = [
  "All",
  "women's clothing",
  "men's clothing",
  "electronics",
  "audio",
  "tv",
  "gaming",
];

const CategoryFilter = ({ logic }) => {
  return (
    <div className="flex justify-center flex-wrap gap-3 px-4 mt-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => logic(cat === "All" ? "" : cat)}
          className="bg-gray-100 text-gray-700 border border-gray-400 rounded-full px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
