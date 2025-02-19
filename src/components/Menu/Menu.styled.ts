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
    transform: translateY(50px) rotate(-4deg) skew(-2deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotate(0deg) skew(0deg);
  }
`;

const slideOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-40px);
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

const floatUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const floatDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const freeze = keyframes`
  0% {
    transform: translateY(0) translateX(0) rotate(0);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0);
    color: var(--accent-color);
  }
`;

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    color: var(--accent-color);
  }
`;

const drop = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(200px);
    opacity: 0;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
    color: var(--accent-color);
  }
  100% {
    transform: scale(1);
    color: var(--primary-color);
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
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "all" : "none")};
  overflow: hidden;
  transition: opacity 0.6s ease-in-out;
  transition-delay: ${({ $isOpen }) => ($isOpen ? "0s" : "0.1s")};
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
  text-align: center;
  padding: 0;
  text-transform: uppercase;
  display: inline-block;
  will-change: transform, opacity;
  transform: translateY(50px);
  opacity: 0;

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          animation: ${slideIn} 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        `
      : css`
          opacity: ${$isOpen ? 1 : 0};
          transition: opacity 0.7s ease-in-out;
          transition-delay: 0.1s;
        `}

  &:nth-child(3) {
    animation-delay: ${({ $isOpen }) => ($isOpen ? "0.8s" : "0s")};
  }
  &:nth-child(2) {
    animation-delay: ${({ $isOpen }) => ($isOpen ? "0.6s" : "0s")};
  }
  &:nth-child(1) {
    animation-delay: ${({ $isOpen }) => ($isOpen ? "0.4s" : "0s")};
  }

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
`;

interface OpenProps {
  $isOpen: boolean;
}

export const SocialLinks = styled.div<OpenProps>`
  position: absolute;
  bottom: 2rem;
  display: flex;
  gap: 6rem;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "all" : "none")};
`;

export const SocialLink = styled.a<{
  $direction: "up" | "down";
  $isOpen: boolean;
}>`
  font-family: "Poppins";
  font-size: 1.5rem;
  font-weight: 200;
  color: var(--primary-color);
  text-decoration: none;
  letter-spacing: 1px;
  opacity: 0;

  ${({ $isOpen, $direction }) =>
    $isOpen &&
    css`
      animation: ${$direction === "up" ? floatUp : floatDown} 1.8s
        cubic-bezier(0.22, 1, 0.36, 1) forwards;
      animation-delay: 0.4s;
    `}

  span {
    display: inline-block;
    transition: transform 0.2s ease;
  }

  &:hover span {
    animation: ${drop} 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  &:hover span:nth-child(6) {
    animation-delay: 0.5s;
  }
  &:hover span:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:hover span:nth-child(4) {
    animation-delay: 0.7s;
  }
  &:hover span:nth-child(1) {
    animation-delay: 0.3s;
  }
  &:hover span:nth-child(3) {
    animation-delay: 0.4s;
  }
  &:hover span:nth-child(5) {
    animation-delay: 0s;
  }
  &:hover span:nth-child(7) {
    animation-delay: 0.6s;
  }
  &:hover span:nth-child(8) {
    animation-delay: 0.25s;
  }
`;
