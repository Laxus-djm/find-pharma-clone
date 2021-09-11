import styled from "styled-components";
import { COLORS } from "../constants";

export const Container = styled.div`
  background: transparent;
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 99;

  @media screen and (max-width: 1020px) {
    width: 800px;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0 10px;
  }
`;

export const H1 = styled.h1`
  font-size: 3rem;
  margin: 20px 0;
  padding: 5px 20px;
  color: ${COLORS.text};
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 2.6rem;
  }
  @media screen and (max-width: 520px) {
    font-size: 1.8rem;
  }
`;

export const H5 = styled.h5`
  color: ${COLORS.secondry};
  text-transform: uppercase;
  position: relative;
  &::after {
    display: ${({ after }) => (after ? "block" : "none")};
    content: "";
    width: 70px;
    height: 1px;
    position: absolute;
    right: -85px;
    top: 50%;
    background: ${COLORS.secondry};
  }
`;

export const Headings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NameH4 = styled.h4`
  color: ${COLORS.text};
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 0.9rem;
  font-weight: 700;
  @media screen and (max-width:820px){
    font-size: 0.8rem;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${COLORS.hover};
  }
`;

export function HeadingDiv({ h5Label, h1Label }) {
  return (
    <Headings>
      <H5>{h5Label}</H5>
      <H1>{h1Label}</H1>
    </Headings>
  );
}
