import styled from "styled-components";

export const StyledAddStatusRight = styled.form`
  position: relative;

  .footer {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    font-size: 2rem;
    gap: 4rem;
    width: 95%;

    .row {
      gap: 3rem;
    }

    button {
      padding: 20px;
      border-radius: 50%;
      font-size: 2rem;
      display: grid;
      place-content: center;
      background-color: green;
      color: #fff;
    }
  }

  .top {
    height: 80px;
    background-color: #000;
  }

  .mid {
    padding: 20px;
    height: 85vh;
    margin-top: 2rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      background-color: transparent;
      padding: 20px;
      /* width: 30%; */
      color: #fff;
      font-size: 3rem;
      border: none;
      outline: none;
    }
  }
`;
