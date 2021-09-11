import styled from "styled-components";
import { COLORS } from "../constants";

export const Btn = styled.button`
  width: ${({ small, circle }) => {
    if (circle) return "50px";
    else if (small) return "100px";
    else return "140px";
  }};
  height: ${({ small, circle }) => {
    if (circle) return "50px";
    else if (small) return "30px";
    else return "40px";
  }};

  background: ${COLORS.secondry};
  border: none;
  border-radius: ${({ circle }) => (circle ? "50%" : "5px")};
  text-align: center;
  color: #fff;
  font-size: ${({ icon }) => (icon ? "1rem" : "0.8rem")};
  font-family: "Rubik", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${COLORS.hover};
    transition: all 0.2s ease-in-out;
  }
`;
