import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const SharedLayout = ({ user }) => {

  return (
    <div className="container">
      <header>
        <h1>Welcome to Our WebApp</h1>
        <div className="header-right">
          <span>Hello, {user.name}</span>
        </div>
      </header>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>          
          {user && (
            <li>
              <Link to="/add">Add Product</Link>
            </li>
          )}
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet /> 
      </main>
      <footer>
        <p>All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default SharedLayout;
