import React from "react";
import styled from "styled-components";
import Product from "./product/Product";
import { popularProducts } from "src/data";
import { PopularTypes } from "../../models/popular";
const Products: React.FC<{}> = () => {
  return (
    <Container>
      {popularProducts.map((item: PopularTypes) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
