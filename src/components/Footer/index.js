import React from "react";
import { Container } from "./../reusable";
import { Btn } from "./../Button";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineGoogle } from "react-icons/ai";
import { IconContext } from "react-icons";
import {
  Column,
  ColumnHeading,
  ColumnItem,
  FooterP,
  FooterWrapper,
  IconItem,
  IconsContainer,
  Input,
  Logo,
  ColumnLink,
  FooterSmall,
  Rights,
  RightSide,
  FooterSmallLink,
} from "./FooterElements";

function Footer() {
  return (
    <IconContext.Provider value={{ cursor: "pointer" }}>
      <Container>
        <FooterWrapper>
          <Column>
            <Logo src={require("../../images/logo.png").default} />
            <FooterP>
              It is a long established fact that a reader will be distracted by
              the readable.
            </FooterP>
            <IconsContainer>
              <IconItem>
                <FaFacebookF />
              </IconItem>
              <IconItem>
                <FaTwitter />
              </IconItem>
              <IconItem>
                <AiOutlineInstagram />
              </IconItem>
              <IconItem>
                <AiOutlineGoogle />
              </IconItem>
              <IconItem>
                <FaLinkedin />
              </IconItem>
            </IconsContainer>
          </Column>

          <Column>
            <ColumnHeading>Services</ColumnHeading>
            <ColumnItem>
              <ColumnLink href="#">Therapiya</ColumnLink>
              <ColumnLink href="#">Dintestry</ColumnLink>
              <ColumnLink href="#">Virusology</ColumnLink>
              <ColumnLink href="#">Pharmocology</ColumnLink>
              <ColumnLink href="#">Cardiology</ColumnLink>
            </ColumnItem>
          </Column>

          <Column>
            <ColumnHeading>Useful Links</ColumnHeading>
            <ColumnItem>
              <ColumnLink href="#">Home</ColumnLink>
              <ColumnLink href="#">About</ColumnLink>
              <ColumnLink href="#">News</ColumnLink>
              <ColumnLink href="#">Doctors</ColumnLink>
              <ColumnLink href="#">Contact us</ColumnLink>
            </ColumnItem>
          </Column>

          <Column>
            <ColumnHeading>Subscribe</ColumnHeading>
            <Input type="email" placeholder="Email" />
            <Btn style={{ width: "100%" }}>Subscribe</Btn>
            <FooterP>
              Get The Latest Updates via email. Any time you may unsubscribe
            </FooterP>
          </Column>
        </FooterWrapper>

        <Rights>
          <FooterSmall>© Website 2022 | All Rights Reserved</FooterSmall>

          <RightSide>
            <FooterSmallLink href="#">Privacy</FooterSmallLink>
            <FooterSmallLink href="#">Terms</FooterSmallLink>
            <FooterSmallLink href="#">Sitemap</FooterSmallLink>
            <FooterSmallLink href="#">Help</FooterSmallLink>
          </RightSide>
        </Rights>
      </Container>
    </IconContext.Provider>
  );
}

export default Footer;
