import React, { useState, useEffect } from "react";
import {
  UnderlineContainer,
  StaticLine,
  AnimatedLine,
} from "./AnimatedUnderline.styled";

interface AnimatedUnderlineProps {
  width?: string;
  color?: string;
  hoverColor?: string;
  height?: string;
  className?: string;
  isHovered?: boolean;
}

export const AnimatedUnderline: React.FC<AnimatedUnderlineProps> = ({
  width = "100%",
  color = "var(--accent-color)",
  hoverColor = "#ffffff",
  height = "10px",
  className,
  isHovered = false,
}) => {
  const [hasInteracted, setHasInteracted] = useState(false);

  // Track when user first hovers
  useEffect(() => {
    if (isHovered) {
      setHasInteracted(true);
    }
  }, [isHovered]);

  return (
    <UnderlineContainer className={className} style={{ width, height }}>
      <StaticLine style={{ backgroundColor: color, height }} />
      <AnimatedLine
        style={{ height }}
        $isHovered={isHovered}
        $hasInteracted={hasInteracted}
      />
    </UnderlineContainer>
  );
};
