const ProductForm = () => {
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const productName = e.target.name.value;
    const productPrice = e.target.price.value;
    const productQuantity = e.target.quantity.value;

    const newProduct = {
      productName,
      productPrice,
      productQuantity,
    };
    console.log(newProduct);
  };

  return (
    <>
      <h2>Add a Product</h2>
      <form onSubmit={handleProductSubmit}>
        <input
          type="text"
          className="border border-warning p-4 w-80"
          name="name"
          placeholder="product name"
        />
        <br />
        <br />
        <input
          type="text"
          className="border border-warning p-4 w-80"
          name="price"
          placeholder="product price"
        />
        <br />
        <br />
        <input
          type="text"
          className="border border-warning p-4 w-80"
          name="quantity"
          placeholder="product quantity"
        />
        <br />
        <br />
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </>
  );
};

export default ProductForm;
