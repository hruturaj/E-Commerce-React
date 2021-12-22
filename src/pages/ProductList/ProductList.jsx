import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../../Components/Navbar/Navbar";
import Announcement from "../../Components/Announcement/Announcement";
import Products from "../../Components/Products/Products";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Footer from "../../Components/Footer/Footer";
import { mobile } from "../../responsive";
import { useLocation } from "react-router-dom";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;
const Filtercontainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 15px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Select = styled.select`
  padding: 5px;
  margin: 0 5px;
  border-radius: 5px;
  ${mobile({ margin: "10px 0px", padding: "8px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  // get categories from locations
  const category = useLocation().pathname.split("/")[2];
  // filterlist
  const [filters, setFilter] = useState({});
  const [sortFilter, setSortFilter] = useState("newest");
  const selectClick = (e) => {
    setFilter({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const selectSortValue = (e) => {
    setSortFilter(e.target.value);
  };

  return (
    <Container>
      <Announcement message="Super Deal! Free Shippingg on orders above Rs 1000!"></Announcement>
      <Navbar></Navbar>
      <Title>{category}</Title>
      <Filtercontainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="color" onChange={selectClick}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={selectClick}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select name="sort" onChange={selectSortValue}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </Filtercontainer>
      <Products category={category} sortFilter={sortFilter} filters={filters} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
