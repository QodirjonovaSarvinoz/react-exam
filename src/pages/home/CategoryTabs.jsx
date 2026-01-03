
import useGet from "../../hooks/useGet";

const CategoryTabs = ({ active, setActive }) => {
  const { data: categories } = useGet(
    "https://693d1ae6f55f1be79301e90f.mockapi.io/categories"
  );

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide py-2">
        {categories
          .sort((a, b) => Number(a.order) - Number(b.order))
          .map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat)}
              className={`
                flex-shrink-0
                w-24 sm:w-28 md:w-32 lg:w-36 h-24 sm:h-28
                rounded-xl border bg-white
                flex flex-col items-center justify-center gap-2
                transition-transform duration-200
                ${
                  active?.id === cat.id
                    ? "border-orange-500 shadow-lg scale-105"
                    : "border-gray-200 hover:border-gray-400 hover:scale-105"
                }
              `}
            >
              <img
                src={cat.icon}
                alt={cat.title}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <span className="text-xs sm:text-sm md:text-base font-medium text-center">
                {cat.title}
              </span>
            </button>
          ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
