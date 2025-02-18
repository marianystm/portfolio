import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
