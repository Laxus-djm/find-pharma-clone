import styled from "styled-components";
import { COLORS } from "../../constants";

export const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const NavLogo = styled.img`
  transform: scale(0.7);
  cursor: pointer;
  @media screen and (max-width: 255px) {
    display: none;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  padding: 0 40px;
  @media screen and (max-width: 800px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  list-style: none;
  text-align: center;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${COLORS.text};
  @media screen and (max-width: 800px) {
    font-size: 0.7rem;
  }
`;
export const NavBtns = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 400px) {
    display: none;
  }
`;
export const BtnWrap = styled.div`
  margin-right: 10px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 720px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
  
    transform: translateX(-10%);

    
  }
`;
