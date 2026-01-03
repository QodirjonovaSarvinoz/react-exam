

import { useState } from "react";
import useGet from "../../hooks/useGet";
import CategoryTabs from "./CategoryTabs";
import ProductCard from "./ProductCard";
import DeliveryInfo from "./DeliveryInfo";
import ProductsGrid from "./ProductsGrid";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const HomePages = () => {
  const [active, setActive] = useState(null);

  const { data: products, loading } = useGet(
    "https://693d1ae6f55f1be79301e90f.mockapi.io/products"
  );

  const filteredProducts = active
    ? active.title === "Aksiyalar"
      ? products.filter((p) => p.discount)
      : products.filter((p) => p.categoryId === active.id)
    : products;

  const isSwiper = filteredProducts.length >= 5;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
      <CategoryTabs active={active} setActive={setActive} />

      {loading && (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-3"></div>
          <span className="text-gray-700 text-sm sm:text-base">Yuklanmoqda...</span>
        </div>
      )}

      {!loading && (
        <>
          {isSwiper ? (
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              spaceBetween={16}
              breakpoints={{
                0: { slidesPerView: 1.2 },
                640: { slidesPerView: 2.2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {filteredProducts.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </>
      )}

      <DeliveryInfo />

      <ProductsGrid products={filteredProducts} />
    </div>
  );
};

export default HomePages;
