import styled from "styled-components";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <NavBar>
        <Logo>Maria N.</Logo>
        <NavItems>
          <NavItem>Home</NavItem>
          <NavItem>Projects</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact</NavItem>
        </NavItems>
      </NavBar>
      <MainContent>{children}</MainContent>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: var(--primary-color);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--accent-color);
`;

const NavItems = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.a`
  color: var(--text-color);
  font-size: 1rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: var(--accent-color);
  }
`;

const MainContent = styled.main`
  margin-top: 80px;
  flex: 1;
  padding: 2rem;
`;
