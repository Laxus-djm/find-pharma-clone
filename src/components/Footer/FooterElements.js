import styled from "styled-components";
import { COLORS } from "../../constants";

export const FooterWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 80px;
  @media screen and (max-width: 820px) {
    grid-template-columns: initial;
    grid-template-areas:
      "row1 empty empty"
      "row2 row3 row4";
  }
  @media screen and (max-width: 641px) {
    grid-template-columns: 1fr;
    grid-template-areas: none;
  }
`;
export const Column = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  @media screen and (max-width: 820px) and (min-width: 641px) {
    align-items: flex-start;
    text-align: left;
    padding: 10px 20px;
    &:nth-of-type(1) {
      grid-area: row1;
    }
    &:nth-of-type(2) {
      grid-area: row2;
    }
    &:nth-of-type(3) {
      grid-area: row3;
    }
    &:nth-of-type(4) {
      grid-area: row4;
    }
  }
`;

export const Logo = styled.img`
  transform: scale(0.8);
  align-self: flex-start;
`;

export const FooterP = styled.p`
  font-size: 0.8rem;
  margin: 20px 0;
  color: ${COLORS.text};
  text-align: left;
`;

export const IconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

export const IconItem = styled.div`
  height: 25px;
  width: 25px;
  color: ${COLORS.secondry};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${COLORS.primary};
    border-radius: 50%;
    border: 5px solid ${COLORS.secondry};
    background: ${COLORS.secondry};
    transition: all 0.2s ease-in-out;
  }
`;

export const ColumnHeading = styled.h4`
  color: ${COLORS.text};
`;
export const ColumnItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ColumnLink = styled.a`
  text-decoration: none;
  font-size: 0.9rem;
  margin-bottom: 10px;
  color: ${COLORS.text};
  &:hover {
    color: ${COLORS.secondry};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  margin: 10px 0;
  border: none;
  outline: none;
  transition: all 0.4s ease-in-out;
  position: relative;
  border-color: transparent;
  border-radius: 10px;

  &:focus {
    border: 1px solid ${COLORS.secondry};
    transition: all 0.4s ease-in-out;
  }
`;

export const Rights = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 640px) {
    margin-top: 100px;
    flex-direction: column;
    height: 50px;
  }
`;
export const FooterSmall = styled.small`
  color: ${COLORS.text};
  font-size: 0.7rem;
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

export const FooterSmallLink = styled.a`
  text-decoration: none;
  font-size: 0.7rem;
  color: ${COLORS.text};
  &:hover {
    color: ${COLORS.secondry};
  }
`;
