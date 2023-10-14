import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const categories = [
    'smartphones',
    'laptops',
    'fragrances',
    'skincare',
    'groceries',
    'home-decoration',
    'furniture',
    'tops',
    'womens-dresses',
    'womens-shoes',
    'mens-shirts',
    'mens-shoes',
    'mens-watches',
    'womens-watches',
    'womens-bags',
    'womens-jewellery',
    'sunglasses',
    'automotive',
    'motorcycle',
    'lighting',
  ];

  const [activeCategory, setActiveCategory] = useState(null);

  const findCategoryByScrollPosition = (scrollPosition) => {
    const categoryIndex = Math.floor(scrollPosition / 300);
    return categories[categoryIndex];
  };

  const handleCategoryClick = (category) => {
    const scrollPosition = window.scrollY;
    setActiveCategory(category);
    const categoryElement = document.getElementById(category);
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrolledCategory = findCategoryByScrollPosition(scrollPosition);
      setActiveCategory(scrolledCategory);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Dashboard;
