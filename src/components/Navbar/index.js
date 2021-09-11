import React from "react";
import { Btn } from "../Button";
import { GoPlusSmall } from "react-icons/go";
import { FaShoppingBasket } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import {
  NavContainer,
  NavLogo,
  NavBtns,
  NavItem,
  NavLinks,
  BtnWrap,
  MobileIcon,
} from "./NavBarElements";
import { COLORS } from "./../../constants";

function Navbar({ toggle }) {
  return (
    <NavContainer>
      <NavLogo src={require("../../images/logo.png").default} alt="logo" />
      <MobileIcon onClick={toggle}>
        <Btn circle>
          <AiOutlineMenu style={{ color: COLORS.text }} />
        </Btn>
      </MobileIcon>
      <NavLinks>
        <NavItem>Home</NavItem>
        <NavItem>Blog</NavItem>
        <NavItem>Pages</NavItem>
        <NavItem>Clinics</NavItem>
        <NavItem>Doctors</NavItem>
        <NavItem>Shop</NavItem>
        <NavItem>Contact Us</NavItem>
      </NavLinks>
      <NavBtns>
        <BtnWrap>
          <Btn circle icon>
            <FaShoppingBasket />
          </Btn>
        </BtnWrap>
        <BtnWrap>
          <Btn small>
            Order Here{" "}
            <GoPlusSmall style={{ marginLeft: "5px", fontSize: "1rem" }} />
          </Btn>
        </BtnWrap>
      </NavBtns>
    </NavContainer>
  );
}

export default Navbar;
