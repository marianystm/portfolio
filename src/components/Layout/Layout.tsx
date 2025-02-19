import { Outlet } from "react-router-dom";
import { LayoutWrapper, MainContent } from "./Layout.styled";
import { Menu } from "../Menu/Menu";

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Menu />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutWrapper>
  );
};
