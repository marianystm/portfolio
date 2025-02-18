import { Outlet } from "react-router-dom";
import { LayoutWrapper } from "./Layout.styled";
import { Menu } from "../Menu/Menu";

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Menu />
      <main>
        <Outlet />
      </main>
    </LayoutWrapper>
  );
};
