import React from "react";
import styled from "styled-components";
import { CategoryTypes } from "src/models/category";
import { categories } from "src/data";
import CategoryItem from "./categoryItem/CategoryItem";

const Categories: React.FC<{}> = () => {
  return (
    <Container>
      {categories.map((item: CategoryTypes) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;
