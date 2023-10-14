import React from 'react';
import Products from '../components/Products';
import Dashboard from '../components/Dashboard';

const Home = () => {
  return (
    <div>
      <section className="dashboard">
        <Dashboard />
        <div className="products">
          <h3>Products</h3>
          <Products />
        </div>
      </section>
    </div>
  );
};

export default Home;
