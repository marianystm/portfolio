import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  35% {
    transform: translate(-50%, -50%) scale(1.3);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const circleAppear = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.7);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const circleFade = keyframes`
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const underlineSlide = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const ContactWrapper = styled.div`
  min-height: 100vh;
  padding: 15rem 2rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30vh;
`;

export const ContactContent = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  position: relative;
  margin-top: 10rem;
`;

export const ContactTitle = styled.h2`
  font-family: "Poppins";
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--text-color);
  margin-bottom: 3rem;
  position: absolute;
  width: 100%;
  top: -5rem;
  left: 0;
`;

export const EmailLink = styled.div`
  font-family: "Anton";
  font-size: 8rem;
  color: var(--accent-color);
  text-decoration: none;
  line-height: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.3s ease;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  --mouse-x: 0px;
  --mouse-y: 0px;
  --is-copied: 0;

  &:hover {
    opacity: 0.9;
    cursor: none;
  }

  &:active {
    opacity: 0.8;
  }

  /* Statisk understrykning */
  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: var(--accent-color);
    pointer-events: none;
  }

  /* Animerad rosa linje */
  .underline-animation {
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 5px;
    overflow: hidden;
    pointer-events: none;
    z-index: 1;
  }

  .underline-animation::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(90deg, transparent, #ff69b4, transparent);
    opacity: 0;
  }

  &:hover .underline-animation::after {
    opacity: 1;
    animation: ${underlineSlide} 1.5s ease-in-out;
  }

  /* Cirkel-animation */
  &::before {
    content: "KOPIERA";
    position: absolute;
    top: var(--mouse-y);
    left: var(--mouse-x);
    transform: translate(-50%, -50%) scale(0.7);
    width: 120px;
    height: 120px;
    background-color: var(--accent-color);
    color: var(--background-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins";
    font-size: 1.2rem;
    font-weight: 500;
    opacity: 0;
    pointer-events: none;
    will-change: opacity, transform;
    z-index: 10;
  }

  &[data-hovering="true"]::before {
    animation: ${circleAppear} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  &[data-visible="true"][data-hovering="false"]::before {
    animation: ${circleFade} 0.3s ease forwards;
  }

  &[data-visible="false"]::before {
    display: none;
  }

  &[data-copied="true"]::before {
    content: "KLAR!";
    animation: ${pulse} 1s cubic-bezier(0.45, 0, 0.55, 1);
  }
`;

export const EmailFirstPart = styled.span`
  display: block;
  margin-bottom: -0.05em;
`;

export const EmailSecondPart = styled.span`
  display: block;
`;

export const SocialContent = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  position: relative;
  margin-bottom: 10rem;
`;

export const SocialTitle = styled.h2`
  font-family: "Poppins";
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--text-color);
  margin-bottom: 3rem;
  position: absolute;
  width: 100%;
  top: -5rem;
  left: 0;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
`;

export const SocialLink = styled.a`
  font-family: "Anton";
  font-size: 8rem;
  color: var(--accent-color);
  text-decoration: underline;
  text-underline-offset: 15px;
  text-decoration-thickness: 5px;
  line-height: 1;
  transition: transform 0.3s ease;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: -0.05em;

  &:hover {
    transform: scale(1.02);
  }
`;
