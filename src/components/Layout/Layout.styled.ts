import styled, { keyframes } from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main`
  animation: ${fadeIn} 0.8s ease-out forwards;
  will-change: transform, opacity;
`;

export const Navigation = styled.nav`
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  justify-content: flex-end;
  max-width: 1200px;
  margin: 0 auto;
`;

export const NavLink = styled(RouterNavLink)`
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }

  &.active {
    color: var(--accent-color);
  }
`;
