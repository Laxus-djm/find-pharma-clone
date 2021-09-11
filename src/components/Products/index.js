import React, { useState } from "react";
import { Container, HeadingDiv, NameH4 } from "./../reusable";
import { Btn } from "../Button";
import {
  ProductsWrapper,
  RadiosBtnWrapper,
  RadioBtn,
  ProductsItemsWrapper,
  ProductImg,
  ProductItem,
  ProductPrice,
  RadioInput,
} from "./ProductsElements";
import { data } from "./../../Data";

function Products() {
  const [category, setCategory] = useState("all");
  const products = data.filter((item) => {
    if (category === "all") return item;
    return item.category === category;
  });
  function onChangeValue(event) {
    setCategory(event.target.value);
  }

  return (
    <Container>
      <ProductsWrapper>
        <HeadingDiv h1Label="The Counter Medicine" h5Label="Trending" />
        <RadiosBtnWrapper onChange={onChangeValue}>
          <RadioBtn>
            <RadioInput type="radio" defaultChecked value="all" name="gender" />{" "}
            All
          </RadioBtn>
          <RadioBtn>
            <RadioInput type="radio" value="pills" name="gender" /> Pills
          </RadioBtn>
          <RadioBtn>
            <RadioInput type="radio" value="cream" name="gender" /> Cream
          </RadioBtn>
          <RadioBtn>
            <RadioInput type="radio" value="covi-19" name="gender" /> Covi-19
          </RadioBtn>
        </RadiosBtnWrapper>
        <ProductsItemsWrapper>
          {products.map((item) => (
            <ProductItem>
              <ProductImg src={item.img} />
              <NameH4>{item.name}</NameH4>
              <ProductPrice>{item.price}</ProductPrice>
              <Btn small>Add to Cart</Btn>
            </ProductItem>
          ))}
        </ProductsItemsWrapper>
      </ProductsWrapper>
    </Container>
  );
}

export default Products;
