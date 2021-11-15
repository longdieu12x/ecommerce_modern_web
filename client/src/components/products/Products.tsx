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
  console.log(sort);
  useEffect(() => {
    getAllProducts(category, res => {
      setProducts(res);
    });
  }, [category]);
  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item: PopularTypes) =>
          filters
            ? Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
              )
            : true
        )
      );
    // console.log(filteredProducts);
    // category &&
    //   setFilteredProducts(
    //     products.filter((item: PopularTypes) => {
    //       let i = true;
    //       if (filters && filters.color) {
    //         i = filters.color.toLowerCase() === item.color.toLowerCase();
    //       }
    //       if (filters && filters.size) {
    //         console.log(filters.size);
    //         i = filters.size.toLowerCase() === item.size.toLowerCase();
    //       }
    //       return i;
    //     })
    //   );
  }, [products, category, filters]);
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts(
        filteredProducts.sort(
          (a: PopularTypes, b: PopularTypes) => a.createdAt - b.createdAt
        )
      );
    } else if (sort === "asc") {
      setFilteredProducts(
        filteredProducts.sort(
          (a: PopularTypes, b: PopularTypes) => a.price - b.price
        )
      );
    } else {
      setFilteredProducts(
        filteredProducts.sort(
          (a: PopularTypes, b: PopularTypes) => b.price - a.price
        )
      );
    }
  }, [sort]);
  return (
    <Container>
      {category
        ? filteredProducts.map((item: PopularTypes) => (
            <Product key={item.id} item={item} />
          ))
        : products.slice(0,8).map((item: PopularTypes) => (
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
