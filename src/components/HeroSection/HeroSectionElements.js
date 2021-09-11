import styled from "styled-components";
import { COLORS } from "../../constants";

export const HeroContainer = styled.div`
  background: ${COLORS.primary};
  height: 850px;
  position: relative;
  z-index: 100;
  overflow: hidden;
`;

export const HeroTop = styled.div`
  background: transparent;
  height: 100px;
`;

export const HeroContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: transparent;
`;

// Hero left Side
export const HeroLeft = styled.div`
  background: transparent;
  display: flex;
  padding: 5px 0 0 2px;
  font-size: 0.8rem;
  @media screen and (max-width: 500px) {
    padding: 0;
  }
  @media screen and (max-width: 250px) {
    flex-direction: column;
  }
`;

export const HeroItem = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  font-size: 0.8rem;
  &:hover {
    color: ${COLORS.hover};
  }
  @media screen and (max-width: 250px) {
   margin-bottom: 10px;
  }
`;

export const HeroAddress = styled.small`
  margin-left: 5px;
  @media screen and (max-width: 500px) {
    font-size: 8px;
  }
`;

// Hero Right Side

export const HeroRight = styled.div`
  background: transparent;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const IconWrapper = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 3px;
  margin-left: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  @media screen and (max-width: 355px) {
    display: none;
  }
`;

// Hero Section Content

export const HeroWrap = styled.div`
  background: transparent;
  height: 500px;
  width: 100%;
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    margin: 100px auto 0;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 80px;
  @media screen and (max-width: 820px) {
    padding: 0;
  }
  @media screen and (max-width: 355px) {
    width: 100%;
  }
`;

export const HeroBtns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const ImgWrapper = styled.div`
  height: 400px;
  width: 400px;
  overflow: hidden;
  margin: auto 0;
  border-radius: 50%;
  background: transparent;
  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const HeroImg = styled.img`
  height: auto;
  width: 100%;
`;

//Images

export const Tr = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  @media screen and (max-width: 800px) {
    width: 700px;
    height: auto;
  }
  @media screen and (max-width: 640px) {
    width: 550px;
  }
`;
export const Bl = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  @media screen and (max-width: 800px) {
    width: 600px;
    height: auto;
  }
`;
export const Br = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  @media screen and (max-width: 800px) {
    width: 550px;
    height: auto;
  }
  @media screen and (max-width: 690px) {
    width: 450px;
  }
  @media screen and (max-width: 640px) {
    right: -80px;
  }
`;

// Icons

export function CreateIcon({ Icon }) {
  let StyledIcon = styled(Icon)`
    transition: 0.2s all ease-in-out;
    &:hover {
      color: ${COLORS.hover};
      transition: 0.2s all ease-in-out;
    }
  `;
  return <StyledIcon />;
}
