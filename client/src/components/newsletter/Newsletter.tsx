import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "src/responsive";

const Newsletter: React.FC<{}> = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely update from your favourite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

const Container = styled.div`
  height: 60vh;
  background: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({
    textAlign: "center"
  })};
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({
    width: "80%"
  })};
`;
const Input = styled.input`
  border: none;
  flex: 8;
  &:focus {
    border: none;
    outline: none;
  }
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background: teal;
  color: white;
`;
