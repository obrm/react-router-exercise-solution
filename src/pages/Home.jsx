import { Link } from 'react-router-dom';

const Home = ({ products }) => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <h2>
            <Link to={`/products/${product.id}`}>
              {product.name}
            </Link>
          </h2>
          <p>{product.description}</p>
          <div className="product-details">
            <span className="product-price">${product.price.toFixed(2)}</span>
            {product.stock > 0 ? (
              <span className="in-stock">In Stock: {product.stock}</span>
            ) : (
              <span className="out-of-stock">Out of Stock</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
