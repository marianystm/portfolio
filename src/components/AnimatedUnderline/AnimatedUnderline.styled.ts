import styled, { keyframes, css } from "styled-components";

const slideRightAnimation = keyframes`
  from {
    left: -40px;
  }
  to {
    left: 100%;
  }
`;

const slideLeftAnimation = keyframes`
  from {
    left: 100%;
  }
  to {
    left: -40px;
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
}>`
  position: absolute;
  top: 0;
  width: 40px;
  height: 100%;
  background: var(--background-color);
  pointer-events: none;

  /* Always visible after first interaction */
  opacity: ${({ $hasInteracted }) => ($hasInteracted ? 1 : 0)};

  /* Animation based on hover state */
  animation: ${({ $isHovered, $hasInteracted }) =>
    $hasInteracted
      ? $isHovered
        ? css`
            ${slideRightAnimation} 0.9s cubic-bezier(0.25, 0.1, 0.6, 1) forwards
          `
        : css`
            ${slideLeftAnimation} 0.9s cubic-bezier(0.25, 0.1, 0.6, 1) forwards
          `
      : "none"};
`;
