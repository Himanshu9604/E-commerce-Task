import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
import { FaPlus, FaMinus } from "react-icons/fa";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const [addedProducts, setAddedProducts] = useState([]);

  const handleAdd = (product) => {
    const isProductAdded = addedProducts.includes(product.id);

    if (isProductAdded) {
      // If the product is already in the cart, remove it
      setAddedProducts(addedProducts.filter((id) => id !== product.id));
      dispatch(remove(product));
    } else {
      // If the product is not in the cart, add it
      setAddedProducts([...addedProducts, product.id]);
      dispatch(add(product));
    }
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            {addedProducts.includes(product.id) ? <FaMinus /> : <FaPlus />}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
