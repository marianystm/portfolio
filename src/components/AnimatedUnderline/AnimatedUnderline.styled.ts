import styled, { keyframes, css } from "styled-components";

const slideRightAnimation = keyframes`
  from {
    left: -50px;
  }
  to {
    left: 100%;
  }
`;

const slideLeftAnimation = keyframes`
  from {
    left: var(--current-position);
  }
  to {
    left: -50px;
  }
`;

export const UnderlineContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 15px;
`;

export const StaticLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const AnimatedLine = styled.div<{
  $isHovered: boolean;
  $hasInteracted: boolean;
  $animationDirection: "right" | "left" | null;
}>`
  position: absolute;
  top: 0;
  width: 50px;
  height: 100%;
  background: var(--background-color);
  pointer-events: none;
  --current-position: 0%;

  /* Always visible after first interaction */
  opacity: ${({ $hasInteracted }) => ($hasInteracted ? 1 : 0)};

  /* Animation based on direction */
  animation: ${({ $animationDirection, $hasInteracted }) => {
    if (!$hasInteracted) return "none";

    return $animationDirection === "right"
      ? css`
          ${slideRightAnimation} 0.9s cubic-bezier(0.25, 0.1, 0.6, 1) forwards
        `
      : css`
          ${slideLeftAnimation} 0.9s cubic-bezier(0.25, 0.1, 0.6, 1) forwards
        `;
  }};

  /* Pause animation when not hovering */
  animation-play-state: ${({ $isHovered, $animationDirection }) =>
    ($isHovered && $animationDirection === "right") ||
    (!$isHovered && $animationDirection === "left")
      ? "running"
      : "paused"};
`;
