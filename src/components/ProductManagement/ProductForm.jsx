import { useState } from "react";

const ProductForm = ({ handleAddProduct }) => {
  const [error, setError] = useState("");

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const productName = e.target.name.value.trim();
    const productPrice = +e.target.price.value;
    const productQuantity = +e.target.quantity.value;

    //validation
    if (!productName) return setError("Please provide a product name");
    else if (productPrice <= 0 || isNaN(productPrice))
      return setError("Please provide a valid product price");
    else if (productQuantity <= 0 || isNaN(productQuantity))
      return setError("Please provide a valid product quantity");
    else setError("");

    const newProduct = {
      productName,
      productPrice,
      productQuantity,
    };
    // console.log(newProduct);
    handleAddProduct(newProduct);
    //form clear
    e.target.reset();
  };

  return (
    <div className="min-w-[500px]">
      <h2 className="text-3xl mb-12 text-error">Add a Product</h2>
      <form onSubmit={handleProductSubmit}>
        <input
          type="text"
          className="border border-warning p-3 w-full rounded-md"
          name="name"
          placeholder="product name"
        />
        <br />
        <br />
        <input
          type="text"
          className="border border-warning p-3 w-full rounded-md"
          name="price"
          placeholder="product price"
        />
        <br />
        <br />
        <input
          type="text"
          className="border border-warning p-3 w-full rounded-md"
          name="quantity"
          placeholder="product quantity"
        />
        <br />
        <br />
        <input
          type="submit"
          className="btn btn-primary w-full"
          value="Submit"
        />
      </form>
      <p className="text-error">
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductForm;
