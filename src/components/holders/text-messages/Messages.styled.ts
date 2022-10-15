import styled from "styled-components";

export const StyledMessages = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  .heigh {
    height: 90vh;
    width: 100% !important;
    min-width: 100% !important;
    padding: 20px;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 4rem;
    padding-bottom: 5rem;
  }

  .bubble-left {
    padding: 20px;
    border-radius: 30px 30px 30px 0;
    background-color: gainsboro;
    color: #000;
    margin-right: auto;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .bubble-right {
    padding: 20px;
    border-radius: 30px 30px 0 30px;
    background-color: #1982fc;
    color: #fff;
    margin-left: auto;
    display: flex;
    align-items: center;
    cursor: pointer;

    .del {
      display: none;
      font-size: 2rem !important;
    }

    :hover {
      .del {
        visibility: visible;
      }
    }
  }

  .left {
    margin: 2rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-size: 0.7rem;
      margin-left: 1rem;
    }
  }

  .right {
    display: flex;
    align-items: center;
    margin: 2rem 0;
    justify-content: flex-end;
    justify-self: flex-end;
    align-self: flex-end;
    margin-left: auto;

    span {
      font-size: 0.7rem;
      margin-left: 1rem;
    }
  }

  .circ {
    height: 40px;
    min-width: 40px;
    border: 2px gainsboro solid;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (max-width: 1000px) {
    height: 70vh;
  }
`;
