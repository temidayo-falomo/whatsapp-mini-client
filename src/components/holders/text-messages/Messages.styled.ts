import styled from "styled-components";

export const StyledMessages = styled.div`
  width: 90%;
  height: 80vh;
  overflow: auto;
  padding: 20px;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .bubble-left {
    padding: 20px;
    border-radius: 30px;
    background-color: gainsboro;
    color: #000;
  }

  .bubble-right {
    padding: 20px;
    border-radius: 30px;
    background-color: #1982fc;
    color: #fff;
    margin-left: auto;

    .del {
      display: none;
    }

    :hover {
      .del {
        visibility: visible;
      }
    }
  }

  .left {
    margin-right: auto;

    span {
      font-size: 0.6rem;
    }
  }

  .right {
    margin-left: auto;
    display: flex;
    align-items: center;
    /* border: 2px red solid; */

    span {
      font-size: 0.7rem;
      margin-left: 1rem;
    }
  }
`;
