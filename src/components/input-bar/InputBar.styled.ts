import styled from "styled-components";

export const StyledInputBar = styled.div`
  width: 100%;
  background-color: black;
  padding: 20px;
  height: 70px;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;

  align-items: center;
  gap: 2rem;
  position: relative;

  .emojis {
    position: absolute;
    bottom: 80px;
    left: 1rem;
  }

  .pointer {
    font-size: 2rem;
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
