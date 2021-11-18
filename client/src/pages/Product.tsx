import React, { useState, useEffect } from "react";
import Announcement from "src/components/announce/Announcement";
import Footer from "src/components/footer/Footer";
import Navbar from "src/components/navbar/Navbar";
import Newsletter from "src/components/newsletter/Newsletter";
import styled from "styled-components";
import { colorProps } from "src/models/slideProps";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "src/responsive";
import { useLocation } from "react-router-dom";
import { getProductDetail } from "src/services/product";
import { ProductProps } from "src/models/product";
const Product: React.FC<{}> = props => {
  const [product, setProduct] = useState<ProductProps>();
  const [quantity, setQuantity] = useState(0);
  const [color, setColor] = useState<string>();
  const [size, setSize] = useState<string>();
  const pathname = useLocation().pathname;
  const productId = pathname.split("/")[2];
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(state => state - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(state => state + 1);
  };
  useEffect(() => {
    getProductDetail(productId, res => {
      setProduct(res);
      setSize(res.size[0]);
    });
  }, [productId]);
  return (
    <Container>
      <Navbar />
      <Announcement />
      {product && (
        <Wrapper>
          <ImgContainer>
            <Image src={product.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc> {product.desc}.</Desc>
            <Price>$ 20</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                {product.color.map((c, value) => (
                  <FilterColor
                    color={c}
                    key={value}
                    onClick={() => setColor(c)}
                  ></FilterColor>
                ))}
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={e => setSize(e.target.value)}>
                  {product.size.map((s, value) => (
                    <FilterSizeOption key={value}>
                      {s.toUpperCase()}
                    </FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove
                  style={{ cursor: "pointer" }}
                  onClick={() => decreaseQuantity()}
                />
                <Amount>{quantity}</Amount>
                <Add
                  style={{ cursor: "pointer" }}
                  onClick={() => increaseQuantity()}
                />
              </AmountContainer>
              <Button>Add to cart</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      )}
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    padding: "10px",
    flexDirection: "column"
  })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({
    height: "40vh"
  })};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({
    padding: "10px"
  })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({
    width: "100%"
  })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div<colorProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    width: "100%"
  })};
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #e6e6e6;
  }
`;
