import styled from "styled-components";

export const StyledLogin = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;

  .box {
    width: 350px;
    height: 250px;
    border: 2px black solid;
    border-radius: 30px;
    text-align: center;
    background-color: #fff;
    color: #000;

    h2 {
      margin-bottom: 1rem;
    }

    p {
      margin-top: 1rem;
    }

    button {
        padding: 20px;
        border-radius: 10px;
    }
  }
`;
