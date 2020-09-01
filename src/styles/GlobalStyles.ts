import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;

    color: var(--white);
  }

  html, body, #root{
      max-width: 100vw;
      max-height: 100vh;

      width: 100%;
      height: 100%;
  }

  *, button, input{
      border: 0;
      background: none;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  }
  *:hover{
    transition: all 0.2s;
  }

  html{
      background: var(--primary);
  }
  :root {
    --primary: #121212;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #6f3c28;
    --retweet: #00C06B;
    --like: #e2255b;
    --twitter: #f55f24;
    --twitter-dark-hover: #16171b;
    --twitter-light-hover: #c75724;
  }
`;
