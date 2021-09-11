import styled, { css } from "styled-components";
import { COLORS } from "../../constants";

export const TeamWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MembersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  margin-top: 50px;
  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 120px;
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-gap: 150px;
    padding: 0;
  }
`;
export const Member = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  @media screen and(max-width: 640px) {
    width: 100%;
  }
`;

export const MemberP = styled.h5`
  color: ${COLORS.text};
  margin: 20px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 400;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${COLORS.hover};
  }
`;

export const MemberImg = styled.img`
  width: 100%;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  @media screen and (min-width: 1020px) {
    &:hover {
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }
  }
`;
export const MemberCard = styled.div`
  margin: 0 auto;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${COLORS.primary};
  border-radius: 20px;
  box-shadow: 0px -10px 30px -15px #000;
  position: relative;
  transition: all 0.2s ease-in-out;
  @media screen and (min-width: 640px) {
    margin-top: ${({ target, id }) =>
      target && target.id === id ? "-70px" : "-60px"};

    &:hover {
      transition: all 0.2s ease-in-out;
      margin-top: -70px;
    }
  }
  @media screen and (max-width: 1020px) {
    padding: 5px 25px;
  }
  @media screen and (max-width: 640px) {
    margin-top: -70px;
    padding: 0;
    width: 70%;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const MemberSocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const IconDiv = styled.div`
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  color: ${COLORS.text};
  &:hover {
    background-color: ${COLORS.text};
    transition: all 0.2s ease-out;
    color: ${COLORS.primary};
  }
`;

export function SocialMediaIcon({ Icon }) {
  let StyledIcon = styled(Icon)`
    @media screen and (max-width: 820px) {
      font-size: 0.7rem;
    }
  `;
  return <StyledIcon />;
}
