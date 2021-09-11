import styled from "styled-components";
import { COLORS } from "../../constants";
export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
export const RadiosBtnWrapper = styled.div`
  width: 100%;
  padding: 10px 120px 0;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

export const RadioBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (max-width: 640px) {
  }
`;

export const RadioInput = styled.input`
  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease-in-out;
  }
`;

export const ProductsItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  text-align: center;
  width: 100%;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 150px;
  margin: 0 auto 50px;
  transition: all 0.3s ease-in-out;
`;

export const ProductImg = styled.img`
  width: 100%;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: rotate(5deg);
  }
`;
export const ProductPrice = styled.p`
  color: ${COLORS.secondry};
  font-size: 0.8rem;
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  margin-bottom: 10px;
`;
