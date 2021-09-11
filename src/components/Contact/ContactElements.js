import styled from "styled-components";
import { COLORS } from "../../constants";

export const ContactWrapper = styled.div`
  width: 100%;
  margin-top: 200px;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${require("../../images/section-tr.png").default});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 100%;
  background-color: #062a3f;
  @media screen and (max-width: 820px) {
    width: 80%;
    flex-direction: column;
    align-items: flex-start;
    height: 200px;
    margin-right: auto;
    margin-left: auto;
    background-position: 110%;
    background-image:  url(${require("../../images/tr.png").default});
  }

  @media screen and (max-width: 520px) {
    background-image: url(${require("../../images/br.png").default});
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    text-align: center;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export function ContactIcon({ Icon }) {
  const StyledIcon = styled(Icon)`
    color: ${COLORS.secondry};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    margin-right: 20px;
  `;
  return <StyledIcon />;
}

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
`;

export const ContactHeading = styled.h5`
  color: ${COLORS.primary};
  font-weight: 400;
  opacity: 0.9;
  text-align: left;
`;
export const ContactH4 = styled.h4`
  color: ${COLORS.primary};
  font-size: 0.9rem;
  text-align: left;
`;
