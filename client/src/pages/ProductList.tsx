import React, { useState } from "react";
import Navbar from "src/components/navbar/Navbar";
import Announcement from "src/components/announce/Announcement";
import styled from "styled-components";
import Products from "src/components/products/Products";
import Newsletter from "src/components/newsletter/Newsletter";
import Footer from "src/components/footer/Footer";
import { mobile } from "src/responsive";
import { useLocation } from "react-router-dom";
const ProductList: React.FC<{}> = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const pathname = useLocation().pathname;
  const category = pathname.split("/")[2];

  const filterHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" defaultValue="color" onChange={filterHandler}>
            <Option value="color" disabled selected>
              Color
            </Option>
            <Option value="white">White</Option>
            <Option value="black">Black</Option>
            <Option value="red">Red</Option>
            <Option value="blue">Blue</Option>
            <Option value="yellow">Yellow</Option>
            <Option value="green">Green</Option>
          </Select>
          <Select name="size" defaultValue="size" onChange={filterHandler}>
            <Option value="size" disabled selected>
              Size
            </Option>
            <Option value="xs">XS</Option>
            <Option value="s">S</Option>
            <Option value="m">M</Option>
            <Option value="l">L</Option>
            <Option value="xl">XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select
            defaultValue="newest"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSort(e.target.value)
            }
          >
            <Option value="newest" selected>
              Newest
            </Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products filters={filters} category="category" sort={sort} />
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
    margin: "0 20px",
    display: "flex",
    flexDirection: "column"
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
