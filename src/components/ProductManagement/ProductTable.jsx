const ProductTable = ({ productData }) => {
  console.log(productData);

  return (
    <div>
      <h2 className="text-3xl mb-12 text-error">
        Total Products: {productData.length}
      </h2>
      <table className="table-auto w-full border-separate border-spacing-0 border border-warning rounded-md">
        <thead className="bg-gray-600">
          <tr>
            <th className="p-2 border border-warning">No.</th>
            <th className="p-2 border border-warning">Products</th>
            <th className="p-2 border border-warning">Price</th>
            <th className="p-2 border border-warning">Quantity</th>
            <th className="p-2 border border-warning">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {productData.map((product, i) => (
            <tr key={i} className="border-b">
              <td className="p-4 border border-warning">{i + 1}</td>
              <td className="p-4 border border-warning">
                {product.productName}
              </td>
              <td className="p-4 border border-warning">
                {product.productPrice * product.productQuantity}
              </td>
              <td className="p-4 border border-warning">
                {product.productQuantity}
              </td>
              <td className="p-4 border border-warning">Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="grid grid-cols-2 gap-4"></div>
    </div>
  );
};

export default ProductTable;
