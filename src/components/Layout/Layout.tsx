import { Outlet } from "react-router-dom";
import {
  LayoutWrapper,
  Navigation,
  NavLink,
  NavList,
} from "./Layout.styled.ts";

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Navigation>
        <NavList>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </NavList>
      </Navigation>
      <main>
        <Outlet />
      </main>
    </LayoutWrapper>
  );
};
