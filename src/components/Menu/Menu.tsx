import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MenuContainer,
  MenuButton,
  MenuItems,
  MenuItem,
} from "./Menu.styled.ts";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <MenuContainer ref={menuRef}>
      <MenuButton onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
        <span></span>
        <span></span>
      </MenuButton>

      {isOpen && (
        <MenuItems>
          <MenuItem onClick={() => handleNavigation("/")}>Home</MenuItem>
          <MenuItem onClick={() => handleNavigation("/projects")}>
            Projects
          </MenuItem>
          <MenuItem onClick={() => handleNavigation("/about")}>About</MenuItem>
          <MenuItem onClick={() => handleNavigation("/contact")}>
            Contact
          </MenuItem>
        </MenuItems>
      )}
    </MenuContainer>
  );
};
