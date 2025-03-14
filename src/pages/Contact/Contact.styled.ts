import styled, { keyframes } from "styled-components";

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

export const ContactWrapper = styled.div`
  min-height: 100vh;
  padding: 15rem 2rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40vh;
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
  letter-spacing: 1px;
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

  /* Ta bort tidigare understrykning */
  &::after {
    content: none;
  }

  /* Wrapper för varje e-postdel */
  .email-part-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
  }

  /* Anpassa styling för AnimatedUnderline */
  .email-underline {
    margin-top: 5px;
    margin-bottom: 15px;
    width: 100%;
  }

  /* Cirkel-animation */
  &::before {
    content: "COPY";
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
    content: "DONE!";
    animation: ${pulse} 1s cubic-bezier(0.45, 0, 0.55, 1) forwards;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const EmailFirstPart = styled.span`
  display: block;
  width: 100%;
`;

export const EmailSecondPart = styled.span`
  display: block;
  width: 100%;
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
  letter-spacing: 1px;
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
  margin-top: 0;
`;

export const SocialLink = styled.a`
  font-family: "Anton";
  font-size: 8rem;
  color: var(--accent-color);
  text-decoration: none;
  line-height: 1;
  transition: opacity 0.3s ease;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Ta bort tidigare understrykning */
  text-decoration: none;
  text-underline-offset: 0;
  text-decoration-thickness: 0;

  /* Anpassa styling för AnimatedUnderline */
  .social-underline {
    margin-top: 15px;
    width: 100%;
  }

  &:hover {
    opacity: 0.9;
  }
`;
