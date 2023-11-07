import css from "styled-jsx/css";

export default css.global`
  html {
    font-size: 16px;
  }
  html,
  body {
    padding: 0;
    margin: 0;    
  }
  body {
    font-family: "tondo";
    font-weight: 400;
    background-color: lightgrey;
    background-image: url("/bg3-780x1688.png");
    background-size: cover;
    background-repeat: no-repeat;
    line-height: 1.3;
  }
  * {
    box-sizing: border-box;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: normal;
    padding: 0;
    margin: 0; 
  }
  button,
  input {
    font-family: "tondo";
    font-weight: 400;
    font-size: 1rem;
  }
`;
