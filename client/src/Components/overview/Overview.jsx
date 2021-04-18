import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const selectProductById = (state) => state.product;
const selectAllProducts = (state) => state.products;

const Overview = () => {
  const product = useSelector(selectProductById);
  const products = useSelector(selectAllProducts) || [];


console.log(products)
  return (
    <div>
      {products.map((prod) => (
      <li key={prod.id}>{prod.description}</li>
      ))}
    </div>
  )
}

export default Overview;

