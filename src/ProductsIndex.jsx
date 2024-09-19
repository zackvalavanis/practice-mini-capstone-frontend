export function ProductsIndex(props) {
  return (
    <div id="products-index">
      <h1>All Products</h1>
      <div className='cards'>
        {props.products.map(product => (
          <div key={product.id} className="Products">
            <h2>{product.name}</h2>
            <p>Description: {product.description}</p>
            <h3>{product.price}</h3>
            <img src={product.image_url} alt="" />
            <button>More Info</button>
          </div>
        ))}
      </div>
    </div>
  );
}
