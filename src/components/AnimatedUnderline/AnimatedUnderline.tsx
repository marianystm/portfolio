import React, { useState, useEffect, useRef } from "react";
import {
  UnderlineContainer,
  StaticLine,
  AnimatedLine,
} from "./AnimatedUnderline.styled";

interface AnimatedUnderlineProps {
  width?: string;
  color?: string;
  height?: string;
  className?: string;
  isHovered?: boolean;
}

export const AnimatedUnderline: React.FC<AnimatedUnderlineProps> = ({
  width = "100%",
  color = "var(--accent-color)",
  height = "10px",
  className,
  isHovered = false,
}) => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<
    "right" | "left" | null
  >(null);
  const animationRef = useRef<HTMLDivElement>(null);
  const [currentPosition, setCurrentPosition] = useState("-50px");

  // Track when user first hovers
  useEffect(() => {
    if (isHovered) {
      setHasInteracted(true);
      setAnimationDirection("right");
    } else if (hasInteracted) {
      // Capture current position when hover ends
      if (animationRef.current) {
        const computedStyle = window.getComputedStyle(animationRef.current);
        const leftPosition = computedStyle.getPropertyValue("left");
        setCurrentPosition(leftPosition);
      }
      setAnimationDirection("left");
    }
  }, [isHovered, hasInteracted]);

  return (
    <UnderlineContainer className={className} style={{ width, height }}>
      <StaticLine style={{ backgroundColor: color, height }} />
      <AnimatedLine
        ref={animationRef}
        style={
          {
            height,
            "--current-position": currentPosition,
          } as React.CSSProperties
        }
        $isHovered={isHovered}
        $hasInteracted={hasInteracted}
        $animationDirection={animationDirection}
      />
    </UnderlineContainer>
  );
};
