import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { styledProps, slideProps, wrapProps } from "../../models/slideProps";
import { SlideTypes } from "../../models/slide";
import { sliderItems } from "../../data";
import { mobile } from "src/responsive";
const Slider: React.FC<{}> = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  let i: any = null;
  const slideHandler = (direction: string) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
    clearTimeout(i);
  };
  useEffect(() => {
    // Auto change slide panel
    i = setTimeout(() => {
      setSlideIndex(state => (state < sliderItems.length - 1 ? state + 1 : 0));
    }, 5000);
  }, [slideIndex]);
  return (
    <Container>
      <Arrow direction="left" onClick={() => slideHandler("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item: SlideTypes) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => slideHandler("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
const Container = styled.div`
  width: 100%auto;
  height: 100vh;
  display: flex;
  /* background: coral; */
  position: relative;
  overflow: hidden;
  ${mobile({
    display: "none"
  })};
`;

const Arrow = styled.div<styledProps>`
  width: 50px;
  height: 50px;
  background: #fff7f7;
  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 999;
`;

const Wrapper = styled.div<wrapProps>`
  height: 100%;
  display: flex;
  transform: translateX(${props => props.slideIndex * -100}vw);
  transition: all 2s ease-in-out;
`;

const Slide = styled.div<slideProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Image = styled.img`
  height: 80%;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 20px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
`;
