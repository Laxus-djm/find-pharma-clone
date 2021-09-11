import React from "react";
import {
  HeroContainer,
  HeroTop,
  HeroContactContainer,
  HeroLeft,
  HeroRight,
  HeroItem,
  HeroAddress,
  IconWrapper,
  CreateIcon,
  HeroWrap,
  HeroContent,
  ImgWrapper,
  HeroBtns,
  HeroImg,
  Tr,
  Bl,
  Br,
} from "./HeroSectionElements";
import { Btn } from "../Button";
import { FaFacebook, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { IconContext } from "react-icons";
import Navbar from "../Navbar";
import { Container,H1,H5 } from './../reusable';

function HeroSection({ toggle }) {
  return (
    <IconContext.Provider value={{ cursor: "pointer" }}>
      <HeroContainer>
        <Tr src={require("../../images/tr.png").default} />
        <Bl src={require("../../images/bl.png").default} />
        <Br src={require("../../images/br.png").default} />
        <Container>
          <HeroTop>
            <HeroContactContainer>
              <HeroLeft>
                <HeroItem>
                  <AiOutlineMail />
                  <HeroAddress>exemple@exemple.com</HeroAddress>
                </HeroItem>
                <HeroItem>
                  <GoLocation />
                  <HeroAddress>Oakwood, Los Angeles, CA 1098</HeroAddress>
                </HeroItem>
              </HeroLeft>

              <HeroRight>
                <IconWrapper>
                  <CreateIcon Icon={FaFacebook} />
                </IconWrapper>
                <IconWrapper>
                  <CreateIcon Icon={FaYoutube} />
                </IconWrapper>
                <IconWrapper>
                  <CreateIcon Icon={FaLinkedin} />
                </IconWrapper>
                <IconWrapper>
                  <CreateIcon Icon={FaTwitter} />
                </IconWrapper>
              </HeroRight>
            </HeroContactContainer>
            <Navbar toggle={toggle} />
          </HeroTop>

          <HeroWrap>
            <HeroContent>
              <H5 after>Market &amp; Resources</H5>
              <H1>Find The Best Doctor near By You</H1>
              <HeroBtns>
                <Btn>Get Quote</Btn>
                <Btn>Read More</Btn>
              </HeroBtns>
            </HeroContent>
            <ImgWrapper>
              <HeroImg src={require("../../images/doctor.jpg").default} />
            </ImgWrapper>
          </HeroWrap>
        </Container>
      </HeroContainer>
    </IconContext.Provider>
  );
}

export default HeroSection;
