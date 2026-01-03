
import React from "react";
import { FiMapPin } from "react-icons/fi";

const DeliveryInfo = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10">
      <div className="flex flex-col sm:flex-row items-center sm:items-stretch bg-gray-100 rounded-xl p-3 sm:p-4 shadow-md gap-3">
        <FiMapPin className="text-orange-500 text-2xl sm:text-3xl flex-shrink-0" />

        <input
          type="text"
          placeholder="Yuk tashish manzilini tekshiring"
          className="flex-1 bg-gray-100 outline-none text-gray-700 placeholder-gray-400 rounded-xl px-4 py-2 sm:py-3 w-full sm:w-auto"
        />

        <button className="bg-orange-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl hover:bg-orange-600 w-full sm:w-auto transition-colors duration-200">
          Tekshirish
        </button>
      </div>
    </div>
  );
};

export default DeliveryInfo;
