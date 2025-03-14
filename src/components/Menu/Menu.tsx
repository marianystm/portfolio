import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MenuContainer,
  MenuButton,
  MenuItems,
  MenuItem,
  SocialLinks,
  SocialLink,
} from "./Menu.styled.ts";

const wrapLetters = (text: string) => {
  return text.split("").map((letter, index) => (
    <span key={index} data-index={index} data-letter={letter}>
      {letter}
    </span>
  ));
};

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mouseDirection, setMouseDirection] = useState<"left" | "right">(
    "right"
  );
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);
  const lastMouseXRef = useRef<number>(0);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentX = e.clientX;
    if (lastMouseXRef.current < currentX) {
      setMouseDirection("right");
    } else {
      setMouseDirection("left");
    }
    lastMouseXRef.current = currentX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    lastMouseXRef.current = e.clientX;
  };

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

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContainer ref={menuRef} onMouseMove={handleMouseMove}>
      <MenuButton onClick={handleMenuToggle} $isOpen={isOpen}>
        <span></span>
        <span></span>
      </MenuButton>
      <MenuItems $isOpen={isOpen}>
        <MenuItem
          onClick={() => handleNavigation("/about")}
          onMouseEnter={handleMouseEnter}
          data-direction={mouseDirection}
          $isOpen={isOpen}
        >
          {wrapLetters("About")}
        </MenuItem>
        <MenuItem
          onClick={() => handleNavigation("/projects")}
          onMouseEnter={handleMouseEnter}
          data-direction={mouseDirection}
          $isOpen={isOpen}
        >
          {wrapLetters("Projects")}
        </MenuItem>
        <MenuItem
          onClick={() => handleNavigation("/contact")}
          onMouseEnter={handleMouseEnter}
          data-direction={mouseDirection}
          $isOpen={isOpen}
        >
          {wrapLetters("Contact")}
        </MenuItem>
        <SocialLinks $isOpen={isOpen}>
          <SocialLink
            href="https://github.com/marianystm"
            target="_blank"
            rel="noopener noreferrer"
            $direction="up"
            $isOpen={isOpen}
          >
            {wrapLetters("GITHUB")}
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/in/maria-nyström-959444113"
            target="_blank"
            rel="noopener noreferrer"
            $direction="down"
            $isOpen={isOpen}
          >
            {wrapLetters("LINKEDIN")}
          </SocialLink>
        </SocialLinks>
      </MenuItems>
    </MenuContainer>
  );
};
