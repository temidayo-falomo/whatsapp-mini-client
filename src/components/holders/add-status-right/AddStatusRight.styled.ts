import styled from "styled-components";

export const StyledAddStatusRight = styled.form`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0;

  .add-top {
    justify-content: flex-end;
    width: 90%;
    margin: 2rem auto;
    font-size: 2.5rem;
    top: 2% + 0.5rem;
    left: 0;
    right: 0;
    margin-top: 2.5rem;

    .pointer {
      display: none;
      color: #ee4b2b;
    }
  }

  .footer {
    margin: 2rem auto;
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
    margin-top: 2rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    align-self: center;

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
    position: fixed;
    z-index: 9999999999999;
    background-color: #000;
    min-height: 100vh;
    width: 100%;
    overflow: hidden !important;

    .footer {
      gap: 2rem;
    }

    .add-top {
      .pointer {
        display: block;
      }
    }
  }
`;
