import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  body {
    overflow: hidden;
    color: #fff;
    background-color: #000;
    margin: 0;
  }

  .App {
    overflow: hidden;
    background-color: #000;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  img {
    width: 100%;
  }

  ul li {
    list-style: none;
  }

  input {
    outline: none;
  }

  .row {
    display: flex;
  }

  .col {
    display: flex;
    flex-direction: column;
  }

   .center {
    align-items: center;
  }

  .center-js {
    justify-content: center;
  }

  .btw {
    justify-content: space-between;
  }

  .start {
    align-items: flex-start;
  }

  .gap-1 {
    gap: 1rem;
  }

  .gap-5 {
    gap: .5rem;
  }

  .grid-center {
    display: grid;
    place-content: center;
  }

  .pointer {
    cursor: pointer;
  }

  .cap {
    text-transform: capitalize;
  }
`;
export default GlobalStyle;
