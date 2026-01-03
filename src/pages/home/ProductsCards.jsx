
import React from "react";
import { useCart } from "../../context/CartContext";

const ProductsCards = ({ product }) => {
  const { addToCart, cartItems, increaseQuantity, decreaseQuantity } = useCart();
  if (!product) return null;

  const price = Number(product.basePrice || 0);
  const inCart = cartItems.find(c => c.id === product.id);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform duration-200 hover:-translate-y-1 p-4 flex flex-col">
      <div className="h-40 sm:h-44 md:h-48 flex items-center justify-center mb-3">
        <img
          src={product.image || "/no-image.png"}
          alt={product.title || "product"}
          className="max-h-full object-contain transition-transform duration-200 hover:scale-105"
        />
      </div>

      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 line-clamp-2 text-center">
        {product.title || "Noma'lum mahsulot"}
      </h3>

      <p className="text-sm sm:text-base text-gray-500 line-clamp-2 mb-3 text-center">
        {Array.isArray(product.ingredients) && product.ingredients.length > 0
          ? product.ingredients.join(", ")
          : product.ingredients || (product.weight ? `${product.weight} g` : "")}
      </p>

      <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-lg sm:text-xl font-bold text-gray-900">
          {price.toLocaleString()} so‘m
        </span>

        {!inCart ? (
          <button
            onClick={() => addToCart(product)}
            className="relative w-full sm:w-auto px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
          >
            Tanlash
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseQuantity(product.id)}
              className="w-[40px]  py-1 bg-orange-500 rounded-lg text-gray-800 hover:bg-red-600"
            >
              -
            </button>
            <span className="px-2 py-1 border rounded-lg">{inCart.quantity}</span>
            <button
              onClick={() => increaseQuantity(product.id)}
              className="w-[40px] py-1 bg-orange-500 rounded-lg text-gray-800 hover:bg-green-700"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsCards;
