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
import { HeaderSection, InfoItem } from "../About/About.styled";

export const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isCopied, setIsCopied] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const emailLinkRef = useRef<HTMLDivElement>(null);
  const firstPartRef = useRef<HTMLDivElement>(null);
  const secondPartRef = useRef<HTMLDivElement>(null);
  const circleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const emailAnimationRef = useRef<NodeJS.Timeout | null>(null);
  const socialAnimationRefs = useRef<{ [key: string]: NodeJS.Timeout | null }>({
    linkedin: null,
    github: null,
  });

  const handleCopyEmail = () => {
    const email = "maria.nystm@gmail.com";

    // Ensure the circle is visible and in hover state when copying
    setIsVisible(true);
    setIsHovering(true);
    setIsCopied(true);

    navigator.clipboard
      .writeText(email)
      .then(() => {
        // Keep the circle visible for 2 seconds
        setTimeout(() => {
          setIsCopied(false);
          // Maintain hover state if mouse is still over the link
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

  const handleEmailPartMouseEnter = () => {
    handleMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsEmailHovered(false);

    // Keep the circle visible for a moment after mouse leaves to show the fade effect
    circleTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 300); // Matches the transition time in CSS
  };

  const handleSocialMouseEnter = (social: string) => {
    setHoveredSocial(social);

    // Clear any previous timeout for this social link
    if (socialAnimationRefs.current[social]) {
      clearTimeout(socialAnimationRefs.current[social]);
    }
  };

  const handleSocialMouseLeave = (social: string) => {
    // Let the animation complete before removing the hover state
    socialAnimationRefs.current[social] = setTimeout(() => {
      if (hoveredSocial === social) {
        setHoveredSocial(null);
      }
    }, 1500); // Matches the animation time
  };

  // Clear timeouts on unmount
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

  // Continue tracking mouse movement outside EmailLink if the circle is visible
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

  // Handle clicks outside EmailLink to maintain the circle when copied
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      // Ignore clicks on EmailLink
      if (emailLinkRef.current?.contains(e.target as Node)) {
        return;
      }

      // If we've copied, keep the circle
      if (isCopied) {
        return;
      }

      // Otherwise, hide the circle if we click outside
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
      <HeaderSection>
        <InfoItem>
          <h3>MARIA NYSTRÖM</h3>
        </InfoItem>

        <InfoItem>
          <h3>
            DEVELOPER
            <br />
            AT{" "}
            <a
              href="https://www.wndy.se/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WNDY.SE
            </a>
          </h3>
        </InfoItem>

        <InfoItem>
          <h3>
            BASED IN
            <br />
            STOCKHOLM
          </h3>
        </InfoItem>
      </HeaderSection>

      <ContactContent style={{ flex: 1 }}>
        <ContactTitle>SEND ME A MESSAGE</ContactTitle>
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
          <div
            className="email-part-wrapper"
            ref={firstPartRef}
            onMouseEnter={handleEmailPartMouseEnter}
          >
            <EmailFirstPart>MARIA.NYSTM</EmailFirstPart>
            <AnimatedUnderline
              width="100%"
              color="var(--accent-color)"
              height="10px"
              className="email-underline"
              isHovered={isEmailHovered}
            />
          </div>
          <div
            className="email-part-wrapper"
            ref={secondPartRef}
            onMouseEnter={handleEmailPartMouseEnter}
          >
            <EmailSecondPart>@GMAIL.COM</EmailSecondPart>
            <AnimatedUnderline
              width="100%"
              color="var(--accent-color)"
              height="10px"
              className="email-underline"
              isHovered={isEmailHovered}
            />
          </div>
        </EmailLink>
      </ContactContent>

      <SocialContent>
        <SocialTitle>
          OR CONNECT WITH ME
          <br />
          ON SOCIALS
        </SocialTitle>
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
