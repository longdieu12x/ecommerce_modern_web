import React from "react";
import styled from "@emotion/styled";
const Announcement: React.FC<{}> = () => {
  return <Container>Super Deal! Freeshiping on Orders Over $50</Container>;
};

export default Announcement;

const Container = styled.div`
  height: 30px;
  background: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
