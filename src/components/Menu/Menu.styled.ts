import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
`;

interface MenuButtonProps {
  $isOpen: boolean;
}

export const MenuButton = styled.button<MenuButtonProps>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  width: 40px;
  height: 30px;
  position: relative;
  z-index: 1001;
  transition: all 0.7s ease;

  span {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    display: block;
    width: 100%;
    height: 3px;
    background-color: var(--primary-color);
    transition: all 0.7s ease;
    transform-origin: center;

    &:first-child {
      top: 25%;
    }

    &:last-child {
      top: 75%;
    }
  }

  ${({ $isOpen }) =>
    !$isOpen &&
    `
    &:hover {
      span {
        transform: rotate(180deg);
      }
    }
  `}

  ${({ $isOpen }) =>
    $isOpen &&
    `
    span:first-child {
      top: 50%;
      margin-top: -1.5px;
      transform: rotate(45deg);
    }
    
    span:last-child {
      top: 50%;
      margin-top: -1.5px;
      transform: rotate(-45deg);
    }

    &:hover {
      transform: rotate(360deg);
      transition: transform 4s ease;
    }
  `}
`;

interface MenuItemsProps {
  $isOpen: boolean;
}

export const MenuItems = styled.div<MenuItemsProps>`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 4rem;
  z-index: 1000;
  padding-top: 4rem;
  min-width: 300px;
  animation: ${({ $isOpen }) => ($isOpen ? fadeIn : fadeOut)} 0.3s ease forwards;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--background-color);
    z-index: -1;
    animation: ${({ $isOpen }) => ($isOpen ? fadeIn : fadeOut)} 0.3s ease
      forwards;
  }
`;

export const MenuItem = styled.button`
  font-size: 3rem;
  font-weight: 300;
  color: var(--primary-color);
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  display: block;
  margin: 0 auto;
  padding: 0;
  opacity: 0;
  animation: ${slideIn} 1.2s ease-out forwards;

  &:nth-child(1) {
    animation-delay: 0.5s;
  }
  &:nth-child(2) {
    animation-delay: 0.8s;
  }
  &:nth-child(3) {
    animation-delay: 1.1s;
  }
  &:nth-child(4) {
    animation-delay: 1.4s;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
