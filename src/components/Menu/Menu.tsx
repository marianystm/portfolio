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
  const [isAnimating, setIsAnimating] = useState(false);
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

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    setTimeout(() => {
      navigate(path);
    }, 300); // Match animation duration
  };

  return (
    <MenuContainer ref={menuRef}>
      <MenuButton onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
        <span></span>
        <span></span>
      </MenuButton>

      {(isOpen || isAnimating) && (
        <MenuItems $isOpen={isOpen}>
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
