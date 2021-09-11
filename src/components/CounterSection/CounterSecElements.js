import styled from "styled-components";
import { COLORS } from "../../constants";

export const CounterContainer = styled.div`
  margin-top: 0;
  height: 500px;
  width: 100%;
  background-color: #062a3f;
  background-image: url(${require("../../images/pattern-3.png").default});
  position: relative;
  z-index: 999;
  @media screen and (max-width: 1020px) {
    height: 600px;
  }
  @media screen and (max-width: 820px) {
    height: 1000px;
  }
  @media screen and (max-width: 640px) {
    height: 1500px;
  }
`;

export const CardBox = styled.div`
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${COLORS.primary};
  position: absolute;
  margin-top: -150px;
  border-radius: 5px;
  box-shadow: 0 -5px 30px -20px #000;
  @media screen and (max-width: 820px) {
    width: 600px;
    left: 0;
    right: 0;
    margin: -150px auto 0;
  }
  @media screen and (max-width: 780px) {
    width: 500px;
  }
  @media screen and (max-width: 550px) {
    width: 350px;
    padding: 20px 5px;
  }
  @media screen and (max-width: 355px) {
    width: 100%;
  }
`;
export const Top = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  margin-bottom: 50px;
  text-align: start;
  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    padding: 10px 30px;
    text-align: center;
  }
  @media screen and (max-width: 520px) {
    padding: 10px 0;
  }
`;

export const Bottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 5px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const H3 = styled.h3`
  margin-bottom: 3px;
  font-size: 0.8rem;
  color: ${COLORS.text};
`;
export const BottomP = styled.small`
  color: ${COLORS.text};
  text-align: left;
`;

export const CountUpWrapper = styled.div`
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 20px;
  z-index: 9999;
  padding: 0 10px;
  @media screen and (max-width: 820px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    bottom: 5px;
  }
`;

export const CountUpItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  margin-bottom: 80px;
  @media screen and (max-width: 780px) {
   font-size: 1rem;
  }
  
  
`;

export const CounterP = styled.p`
  text-align: center;
`;
// create Icons
export function CreateIcon({ Icon, margin }) {
  const StyledIcon = styled(Icon)`
    margin: ${margin ? "0 30px 0 0" : "0"};
    color: ${COLORS.text};
    padding-top: 10px;
    font-size: 50px;
  `;

  return <StyledIcon />;
}
