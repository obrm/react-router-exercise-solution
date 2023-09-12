import { Link, useParams } from 'react-router-dom';

const Product = ({ products }) => {
  const { productId } = useParams();
 
  const product = products.find(p => p.id === parseInt(productId)); 
   
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-detail-container">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div className="product-details">
        <span className="product-price">${product.price.toFixed(2)}</span>
        {product.stock > 0 ? (
          <span className="in-stock">In Stock: {product.stock}</span>
        ) : (
          <span className="out-of-stock">Out of Stock</span>
        )}
      </div>
      <Link to={`/products/${productId}/edit`} className="edit-link">Edit Product</Link>
    </div>
  );
};

export default Product;
