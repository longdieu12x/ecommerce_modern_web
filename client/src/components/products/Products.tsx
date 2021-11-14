import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./product/Product";
import { popularProducts } from "src/data";
import { PopularTypes } from "../../models/popular";
import { filterProps } from "src/models/filterProps";
import { getAllProducts } from "src/services/product";

const Products: React.FC<{
  category?: string;
  filters?: filterProps;
  sort?: string;
}> = props => {
  const { category, filters, sort } = props;
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log(process.env.REACT_APP_API);
  useEffect(() => {
    getAllProducts(category, res => {
      console.log(res);
    });
  }, [category]);

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
