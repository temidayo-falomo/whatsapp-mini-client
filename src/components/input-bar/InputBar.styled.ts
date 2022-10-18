import styled from "styled-components";

export const StyledInputBar = styled.div`
  width: 100%;
  background-color: black;
  padding: 20px;
  height: 70px;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  z-index: 9999;

  align-items: center;
  gap: 2rem;
  
  .emojis {
    position: absolute;
    bottom: 80px;
    left: 1rem;
  }

  .pointer {
    font-size: 2rem;
  }

  .pointer.actv {
    color: rgb(9, 54, 59);
    font-size: 2.5rem;
  }

  form {
    display: flex;
    gap: 1rem;

    button {
      font-size: 2rem;
      background-color: transparent;
      color: #fff;
    }
  }

  input {
    width: 100%;
    padding: 15px 20px;
    background-color: ghostwhite;
    border-radius: 10px;
    border: none;
    outline: none;
  }
`;
