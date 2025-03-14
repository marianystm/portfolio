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
import { AnimatedUnderline } from "../../components/AnimatedUnderline/AnimatedUnderline";

export const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isCopied, setIsCopied] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const emailLinkRef = useRef<HTMLDivElement>(null);
  const circleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const emailAnimationRef = useRef<NodeJS.Timeout | null>(null);
  const socialAnimationRefs = useRef<{ [key: string]: NodeJS.Timeout | null }>({
    linkedin: null,
    github: null,
  });

  const handleCopyEmail = () => {
    const email = "maria.nystm@gmail.com";

    // Säkerställ att cirkeln är synlig och i hover-tillstånd när vi kopierar
    setIsVisible(true);
    setIsHovering(true);
    setIsCopied(true);

    navigator.clipboard
      .writeText(email)
      .then(() => {
        // Behåll cirkeln synlig i 2 sekunder
        setTimeout(() => {
          setIsCopied(false);
          // Behåll hover-tillståndet om musen fortfarande är över länken
          if (!emailLinkRef.current?.matches(":hover")) {
            setIsHovering(false);
          }
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        setIsCopied(false);
        setIsHovering(false);
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
    setIsEmailHovered(true);

    if (circleTimeoutRef.current) {
      clearTimeout(circleTimeoutRef.current);
      circleTimeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsEmailHovered(false);
    // Låt cirkeln vara synlig en stund efter att musen lämnat för att fade-effekten ska synas
    circleTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 300); // Matchar transition-tiden i CSS
  };

  const handleSocialMouseEnter = (social: string) => {
    setHoveredSocial(social);

    // Rensa eventuell tidigare timeout för denna sociala länk
    if (socialAnimationRefs.current[social]) {
      clearTimeout(socialAnimationRefs.current[social]);
    }
  };

  const handleSocialMouseLeave = (social: string) => {
    // Låt animationen slutföras innan vi tar bort hover-tillståndet
    socialAnimationRefs.current[social] = setTimeout(() => {
      if (hoveredSocial === social) {
        setHoveredSocial(null);
      }
    }, 1500); // Matchar animationstiden
  };

  // Rensa timeout vid unmount
  useEffect(() => {
    return () => {
      if (circleTimeoutRef.current) {
        clearTimeout(circleTimeoutRef.current);
      }
      if (emailAnimationRef.current) {
        clearTimeout(emailAnimationRef.current);
      }
      Object.values(socialAnimationRefs.current).forEach((timeout) => {
        if (timeout) clearTimeout(timeout);
      });
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

  // Hantera klick utanför EmailLink för att behålla cirkeln när den är kopierad
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      // Ignorera klick på EmailLink
      if (emailLinkRef.current?.contains(e.target as Node)) {
        return;
      }

      // Om vi har kopierat, behåll cirkeln
      if (isCopied) {
        return;
      }

      // Annars, dölj cirkeln om vi klickar utanför
      if (isVisible && !isHovering) {
        setIsVisible(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isVisible, isHovering, isCopied]);

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
          <AnimatedUnderline
            width="100%"
            color="var(--accent-color)"
            height="10px"
            className="email-underline"
            isHovered={isEmailHovered}
          />
        </EmailLink>
      </ContactContent>

      <SocialContent>
        <SocialTitle>Eller kontakta mig här</SocialTitle>
        <SocialLinks>
          <SocialLink
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleSocialMouseEnter("linkedin")}
            onMouseLeave={() => handleSocialMouseLeave("linkedin")}
          >
            LINKEDIN
            <AnimatedUnderline
              width="100%"
              color="var(--accent-color)"
              height="10px"
              className="social-underline"
              isHovered={hoveredSocial === "linkedin"}
            />
          </SocialLink>
          <SocialLink
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleSocialMouseEnter("github")}
            onMouseLeave={() => handleSocialMouseLeave("github")}
          >
            GITHUB
            <AnimatedUnderline
              width="100%"
              color="var(--accent-color)"
              height="10px"
              className="social-underline"
              isHovered={hoveredSocial === "github"}
            />
          </SocialLink>
        </SocialLinks>
      </SocialContent>
    </ContactWrapper>
  );
};
