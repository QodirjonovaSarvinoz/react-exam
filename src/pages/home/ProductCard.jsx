

const ProductCard = ({ item }) => {
  const minPrice =
    item.sizes?.length > 0
      ? Math.min(...item.sizes.map(s => Number(s.price)))
      : item.basePrice;

  return (
    <div className="relative bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 mb-5">
      {item.discount && (
        <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full z-10">
          до {item.quantity}%
        </span>
      )}

      <div className="w-full h-36 sm:h-40 md:h-44 flex items-center justify-center mb-3">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-full object-contain transition-transform duration-200 hover:scale-105"
        />
      </div>

      <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 line-clamp-2 text-center">
        {item.title}
      </h3>

      <div className="flex justify-center items-center gap-2">
        {item.oldPrice && (
          <span className="line-through text-gray-400 text-sm sm:text-base">
            {item.oldPrice} ₽
          </span>
        )}
        <span className="text-red-600 font-bold text-base sm:text-lg">
          {minPrice} ₽
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
