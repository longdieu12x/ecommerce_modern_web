import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mobile } from "src/responsive";
import { useDispatch, useSelector } from "react-redux";
import { userState, userData } from "src/models/reduxProps/userProps";
import { actionCreators, State } from "../state";
import { storeUserData } from "src/services/user";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
var _ = require("lodash");
const Login: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state: State) => state);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = state.user.data!;
  const { login } = bindActionCreators(actionCreators, dispatch);
  const loginHandler = (e: React.FormEvent) => {
    e.preventDefault();
    login({
      username: username,
      password: password
    });
  };
  useEffect(() => {
    if (!_.isEmpty(user)) {
      storeUserData(user as userData);
      history.push("/");
    }
  }, [user]);
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={loginHandler}>
          <Input
            placeholder="username"
            onChange={e => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit">LOGIN</Button>
          <Link onClick={() => history.push("/register")}>
            CREATE NEW ACCOUNT
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background: white;
  ${mobile({
    width: "70%"
  })}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  &:focus {
    border: none;
  }
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background: teal;
  color: white;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
