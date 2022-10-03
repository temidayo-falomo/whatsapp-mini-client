import styled from "styled-components";

export const StyledAddStatusRight = styled.form`
  position: relative;

  .add-top {
    justify-content: flex-end;
    width: 90%;
    margin: 2rem auto;
    font-size: 2rem;

    .pointer {
      display: none;
    }
  }

  .footer {
    position: absolute;
    bottom: 2rem;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 2rem;
    gap: 4rem;
    width: 90%;

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

    .pointer.actv {
      color: #09363b;
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
      color: #fff;
      font-size: 3rem;
      border: none;
      outline: none;
      width: 80%;
      min-width: 250px;
      text-align: center;

      ::placeholder {
        color: #fff;
        opacity: 1;
        text-align: center;
      }

      :-ms-input-placeholder {
        color: #fff;
      }

      ::-ms-input-placeholder {
        color: #fff;
      }
    }
  }

  @media (max-width: 1000px) {
    position: absolute;
    bottom: 0;
    z-index: 9999999999999;
    background-color: #000;
    height: 100vh;
    width: 100%;
    overflow: hidden !important;

    .add-top {
      .pointer {
        display: block;
      }
    }
  }
`;
