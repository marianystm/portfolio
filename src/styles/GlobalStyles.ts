import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
  
  @font-face {
    font-family: 'Anton';
    src: url('/src/assets/fonts/Anton_Complete/Anton-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  :root {
    --primary-color: #4d0000;
    --secondary-color: #4A90E2;
    --accent-color: #ff2727;
    --background-color: #ffe6e3;
    --text-color: #4d0000;
    --text-secondary: #666666;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background-color);
    color: var(--text-color);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;
