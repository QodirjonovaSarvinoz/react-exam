
import React from "react";
import ProductsCards from "./ProductsCards";

const ProductsGrid = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductsCards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
