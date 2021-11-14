import React from "react";
import styled from "styled-components";
import { CategoryTypes } from "src/models/category";
import { mobile } from "src/responsive";
import { Link } from "react-router-dom";
const CategoryItem: React.FC<{ item: CategoryTypes }> = props => {
  const { item } = props;
  return (
    <Container>
      <Link to={`/products/${item.category}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({
    height: "30pvh"
  })};
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;
