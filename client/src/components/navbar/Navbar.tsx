import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { mobile } from "src/responsive";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "src/state";
import { logOut } from "src/services/user";
const Navbar: React.FC<{}> = () => {
  const history = useHistory();
  const state = useSelector((state: State) => state);
  const { user, cart }  =  state;
  const logoutHandler = () => {
    logOut();
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={() => history.push("/")}>Djan</Logo>
        </Center>
        <Right>
          {Object.keys(user.data).length == 0 ? (
            <>
              <MenuItem onClick={() => history.push("/register")}>
                REGISTER
              </MenuItem>
              <MenuItem onClick={() => history.push("/login")}>
                SIGN IN
              </MenuItem>
            </>
          ) : (
            <MenuItem onClick={logoutHandler}>LOG OUT</MenuItem>
          )}
          <MenuItem onClick={() => history.push("/cart")}>
            <Badge badgeContent={cart.data.quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "50px"
  })};
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    padding: "10px 0"
  })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none"
  })};
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: "24px"
  })};
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    justifyContent: "center",
    flex: 2
  })};
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({
    width: "50px"
  })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
    fontSize: "12px",
    marginLeft: "10px"
  })};
`;
