import { useState, useRef, useEffect } from "react";
import {
  ContactWrapper,
  ContactContent,
  ContactTitle,
  EmailLink,
  EmailFirstPart,
  EmailSecondPart,
  SocialContent,
  SocialTitle,
  SocialLinks,
  SocialLink,
} from "./Contact.styled";

export const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isCopied, setIsCopied] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const emailLinkRef = useRef<HTMLDivElement>(null);
  const circleTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopyEmail = () => {
    const email = "maria.nystm@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (emailLinkRef.current) {
      const rect = emailLinkRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = () => {
    setIsVisible(true);
    setIsHovering(true);

    if (circleTimeoutRef.current) {
      clearTimeout(circleTimeoutRef.current);
      circleTimeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Låt cirkeln vara synlig en stund efter att musen lämnat för att fade-effekten ska synas
    circleTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 300); // Matchar transition-tiden i CSS
  };

  // Rensa timeout vid unmount
  useEffect(() => {
    return () => {
      if (circleTimeoutRef.current) {
        clearTimeout(circleTimeoutRef.current);
      }
    };
  }, []);

  // Fortsätt spåra musen även utanför EmailLink om cirkeln är synlig
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isVisible && emailLinkRef.current) {
        const rect = emailLinkRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    if (isVisible) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, [isVisible]);

  return (
    <ContactWrapper>
      <ContactContent>
        <ContactTitle>Skicka ett meddelande</ContactTitle>
        <EmailLink
          ref={emailLinkRef}
          onClick={handleCopyEmail}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={
            {
              "--mouse-x": `${mousePosition.x}px`,
              "--mouse-y": `${mousePosition.y}px`,
              "--is-copied": isCopied ? "1" : "0",
              "--is-hovering": isHovering ? "1" : "0",
              "--is-visible": isVisible ? "1" : "0",
            } as React.CSSProperties
          }
          data-copied={isCopied}
          data-hovering={isHovering}
          data-visible={isVisible}
        >
          <EmailFirstPart>MARIA.NYSTM</EmailFirstPart>
          <EmailSecondPart>@GMAIL.COM</EmailSecondPart>
          <div className="underline-animation"></div>
        </EmailLink>
      </ContactContent>

      <SocialContent>
        <SocialTitle>Eller kontakta mig här</SocialTitle>
        <SocialLinks>
          <SocialLink
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </SocialLink>
          <SocialLink
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </SocialLink>
        </SocialLinks>
      </SocialContent>
    </ContactWrapper>
  );
};
