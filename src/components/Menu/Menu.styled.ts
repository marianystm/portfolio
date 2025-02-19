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

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const letterAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  25% {
    transform: translateY(-20px);
    opacity: 0.7;
  }
  50%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1002;
`;

interface MenuButtonProps {
  $isOpen: boolean;
}

export const MenuButton = styled.button<MenuButtonProps>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 1rem;
  width: 50px;
  height: 50px;
  position: relative;
  z-index: 1002;
  transition: all 0.7s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    position: absolute;
    display: block;
    width: 40px;
    height: 3px;
    background-color: var(--primary-color);
    transition: all 0.7s ease;
    transform-origin: center;
    left: 50%;
    transform: translateX(-50%);

    &:first-child {
      top: 35%;
    }

    &:last-child {
      top: 65%;
    }
  }

  ${({ $isOpen }) =>
    !$isOpen &&
    `
    &:hover {
      span {
        transform: translateX(-50%) rotate(180deg);
      }
    }
  `}

  ${({ $isOpen }) =>
    $isOpen &&
    `
    span {
      background-color: var(--primary-color);
    }
    
    span:first-child {
      top: 50%;
      margin-top: -1.5px;
      transform: translateX(-50%) rotate(45deg);
    }
    
    span:last-child {
      top: 50%;
      margin-top: -1.5px;
      transform: translateX(-50%) rotate(-45deg);
    }

    &:hover {
      transform: rotate(180deg);
      transition: transform 0.7s ease;
    }
  `}
`;

export const MenuItems = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: -4rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.8s ease;
  overflow: hidden;

  ${({ $isOpen }) =>
    $isOpen &&
    `
    opacity: 1;
    pointer-events: all;
  `}
`;

interface MenuItemProps {
  $isOpen: boolean;
}

export const MenuItem = styled.button<MenuItemProps>`
  font-family: "Poppins";
  font-size: 5rem;
  font-weight: 200;
  letter-spacing: 5px;
  color: var(--primary-color);
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  padding: 0;
  opacity: 0;
  text-transform: uppercase;
  animation: ${css`
      ${slideIn}`} 0.7s ease-out forwards;
  display: inline-block;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      animation: ${slideIn} 0.7s ease-out forwards;
    `}

  span {
    display: inline-block;
    transition: transform 0.2s ease;
    will-change: transform;
  }

  &[data-direction="right"] {
    &:hover span {
      animation: ${css`
          ${letterAnimation}`} 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
      animation-fill-mode: forwards;
    }

    &:hover span:nth-child(1) {
      animation-delay: 0s;
    }
    &:hover span:nth-child(2) {
      animation-delay: 0.08s;
    }
    &:hover span:nth-child(3) {
      animation-delay: 0.16s;
    }
    &:hover span:nth-child(4) {
      animation-delay: 0.24s;
    }
    &:hover span:nth-child(5) {
      animation-delay: 0.32s;
    }
    &:hover span:nth-child(6) {
      animation-delay: 0.4s;
    }
    &:hover span:nth-child(7) {
      animation-delay: 0.48s;
    }
    &:hover span:nth-child(8) {
      animation-delay: 0.56s;
    }
  }

  &[data-direction="left"] {
    &:hover span {
      animation: ${css`
          ${letterAnimation}`} 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
      animation-fill-mode: forwards;
    }

    &:hover span:nth-last-child(1) {
      animation-delay: 0s;
    }
    &:hover span:nth-last-child(2) {
      animation-delay: 0.08s;
    }
    &:hover span:nth-last-child(3) {
      animation-delay: 0.16s;
    }
    &:hover span:nth-last-child(4) {
      animation-delay: 0.24s;
    }
    &:hover span:nth-last-child(5) {
      animation-delay: 0.32s;
    }
    &:hover span:nth-last-child(6) {
      animation-delay: 0.4s;
    }
    &:hover span:nth-last-child(7) {
      animation-delay: 0.48s;
    }
    &:hover span:nth-last-child(8) {
      animation-delay: 0.56s;
    }
  }

  &:nth-child(1) {
    animation-delay: 0.3s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.5s;
  }
`;
