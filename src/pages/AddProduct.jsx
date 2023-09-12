import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    stock: 0
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    setProduct({
      name: '',
      description: '',
      price: 0,
      stock: 0
    });
    navigate('/'); 
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input type="text" name="name" value={product.name} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Description</label>
          <textarea name="description" value={product.description} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Price</label>
          <input type="number" name="price" value={product.price} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Stock</label>
          <input type="number" name="stock" value={product.stock} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-btn">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;