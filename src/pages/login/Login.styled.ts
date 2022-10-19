import styled from "styled-components";

export const StyledLogin = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;

  .box {
    width: 350px;
    min-width: 330px;
    height: 250px;
    border: 2px black solid;
    border-radius: 30px;
    text-align: center;
    background-color: #fff;
    color: #000;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    h2 {
      margin-bottom: 1rem;
    }

    p {
      margin-top: 1rem;
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }

    button {
      padding: 20px;
      border-radius: 15px;
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      background-color: transparent;
      border: 1px black solid;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

      :hover {
        border: 1px green solid;
      }
    }
  }
`;
