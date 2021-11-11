import React from "react";
import Navbar from "src/components/navbar/Navbar";
import Announcement from "src/components/announce/Announcement";
import styled from "styled-components";
import Products from "src/components/products/Products";
import Newsletter from "src/components/newsletter/Newsletter";
import Footer from "src/components/footer/Footer";
import { mobile } from "src/responsive";
const ProductList: React.FC<{}> = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;

const Container = styled.div``;
const Title = styled.div`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({
    margin: "0 20px", display: "flex", flexDirection: "column"
  })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({
    marginRight: "0"
  })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({
    margin: "10px 0px"
  })}
`;
const Option = styled.option``;
