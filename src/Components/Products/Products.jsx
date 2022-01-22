import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "../Product/Product";
import axios from "axios";
import { publicRequest } from "../../requestMethods";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Products = ({ filters, category, sortFilter }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        category
          ? `https://node-e-com.herokuapp.com/api/products?category=${category}`
          : `https://node-e-com.herokuapp.com/api/products`
      )
      .then((res) => res.data)
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sortFilter === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sortFilter === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sortFilter]);

  return (
    <Container>
      {category
        ? filteredProducts.map((product) => (
            <Product product={product} key={product._id}></Product>
          ))
        : products
            .slice(0, 8)
            .map((product) => (
              <Product product={product} key={product._id}></Product>
            ))}
    </Container>
  );
};

export default Products;
