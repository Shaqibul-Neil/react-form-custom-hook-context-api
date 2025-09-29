import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {
  const [productData, setProductData] = useState([]);

  const handleAddProduct = (newProductsData) => {
    setProductData([...productData, newProductsData]);
  };
  return (
    <div className="grid grid-cols-2 gap-8">
      <ProductForm handleAddProduct={handleAddProduct} />
      <ProductTable productData={productData} />
    </div>
  );
};

export default ProductManagement;
