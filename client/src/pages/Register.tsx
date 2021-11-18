import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "src/responsive";
import { useSelector } from "react-redux";
import { State } from "src/state";
import { useHistory } from "react-router-dom";
import { registerAccount } from "src/services/user";
const Register: React.FC<{}> = () => {
  const user = useSelector((state: State) => state.user);
  const history = useHistory();
  const [error, setError] = useState<string>("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  //Middleware
  if (Object.keys(user.data).length > 0) {
    history.push("/");
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirm) {
      registerAccount(
        {
          username: username,
          email: email,
          password: password
        },
        res => {
          if (res.status === 0) {
            setError("Register failed! Please try again.");
          } else {
            setError("");
            history.push("/");
          }
        }
      );
    } else {
      setError("2 passwords are not the same!");
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={submitHandler}>
          <Input
            placeholder="username"
            onChange={e => setUsername(e.target.value)}
          />
          <Input placeholder="email" onChange={e => setEmail(e.target.value)} />
          <Input
            placeholder="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
          <Input
            placeholder="confirm password"
            type="password"
            onChange={e => setConfirm(e.target.value)}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the{" "}
            <b style={{ textDecoration: "underline", cursor: "pointer" }}>
              PRIVACY POLICY
            </b>
          </Agreement>
          <Error>{error}</Error>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background: white;
  ${mobile({
    width: "75%"
  })}
`;

const Error = styled.p`
  color: red;
  font-size: 14px;
  margin: 0px 0 10px 0;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  &:focus {
    border: none;
  }
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background: teal;
  cursor: pointer;
  color: white;
`;
