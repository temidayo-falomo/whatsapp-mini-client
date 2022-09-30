import styled from "styled-components";

export const StyledMessages = styled.div`
  width: 100%;

  .heigh {
    height: 80vh;
    padding: 20px;
    margin: 0 auto;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .bubble-left {
    padding: 20px;
    border-radius: 30px;
    background-color: gainsboro;
    color: #000;
    margin-right: auto;
    width: 300px;
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
    margin: 2rem 0;
    margin-right: auto;

    span {
      font-size: 0.7rem;
      margin-left: 1rem;
    }
  }

  .right {
    margin-left: auto;
    display: flex;
    align-items: center;
    margin: 2rem 0;

    span {
      font-size: 0.7rem;
      margin-left: 1rem;
    }
  }
`;
