import styled from "styled-components";
import { COLORS } from "./../../constants";
import { AiOutlineClose } from "react-icons/ai";
export const SidebarContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  z-index: 999;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: ${COLORS.primary};
  width: 90%;
  padding: 10px;
  position: relative;
`;

export const SidebarLogo = styled.img`
  transform: scale(0.9);
  margin-top: 50px;
  cursor: pointer;
`;

export const SidebarLinks = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SidebarItems = styled.li`
  list-style: none;
  margin-bottom: 30px;
  color: ${COLORS.text};
  font-family: "Rubik", sans-serif;
  font-weight: 800;
  font-size: 0.9rem;
  padding-left: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${COLORS.secondry};
    transition: all 0.2s ease-in-out;
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 30px;
  cursor: pointer;
`;

export const Icon = styled(AiOutlineClose)`
  color: ${COLORS.text};
  opacity: 0.7;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
`;
