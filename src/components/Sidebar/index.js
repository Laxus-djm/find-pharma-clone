import React from "react";
import {
  SidebarContainer,
  SidebarItems,
  SidebarLinks,
  SidebarLogo,
  SidebarWrapper,
  CloseIcon,
  Icon,
} from "./SidebarElements";


function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarWrapper>
        <CloseIcon>
          <Icon />
        </CloseIcon>
        <SidebarLogo src={require("../../images/logo.png").default} />
        <SidebarLinks>
          <SidebarItems>Home</SidebarItems>
          <SidebarItems>Blog</SidebarItems>
          <SidebarItems>Pages</SidebarItems>
          <SidebarItems>Clinics</SidebarItems>
          <SidebarItems>Doctors</SidebarItems>
          <SidebarItems>Shop</SidebarItems>
          <SidebarItems>Contact Us</SidebarItems>
        </SidebarLinks>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
