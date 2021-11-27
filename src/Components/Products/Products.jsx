import React from "react";
import styled from "styled-components";
import Product from "../Product/Product";
import { popularProducts } from "../../data";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => (
        <Product product={product} key={product.id}></Product>
      ))}
    </Container>
  );
};

export default Products;
