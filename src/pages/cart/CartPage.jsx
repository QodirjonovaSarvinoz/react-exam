import React from "react";
import { useCart } from "../../context/CartContext";

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.basePrice || 0) * (item.quantity || 1),
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto py-20 text-center text-gray-500">
        Sizning korzinkangizda mahsulotlar mavjud emas 😢
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold mb-6">Sizning mahsulotlaringiz</h2>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-xl shadow-md"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image || "/no-image.png"}
                alt={item.title}
                className="w-20 h-20 object-contain rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm">
                  {item.basePrice?.toLocaleString()} so‘m
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-3 sm:mt-0">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="w-[40px] py-1 bg-orange-500 rounded-lg hover:bg-red-600"
              >
                -
              </button>
              <span className="px-3 py-1 border rounded-lg">{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="w-[40px] py-1 bg-orange-500 rounded-lg hover:bg-green-700"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center bg-white p-6 rounded-xl shadow-md">
        <span className="text-xl font-bold">
          Umumiy: {totalPrice.toLocaleString()} so‘m
        </span>
        <button className="mt-4 sm:mt-0 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
          Buyurtma berish
        </button>
      </div>
    </div>
  );
};

export default CartPage;
