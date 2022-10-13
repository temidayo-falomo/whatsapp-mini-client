import styled from "styled-components";

export const StyledDetailedUsers = styled.div`
  .det-top {
    padding: 20px;
    margin-top: 2rem;

    h4 {
      font-size: 1.5rem;
    }

    .pointer {
      font-size: 2rem;
    }

    .tiny-circle {
      padding: 5px;
      background-color: gainsboro;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: grid;
      place-content: center;
    }
  }

  .det-col {
    padding: 20px;
    height: 60vh;
    gap: 1rem;
  }

  .det-card {
    padding: 20px 0;
    align-items: center;
    gap: 0.5rem;

    button {
      padding: 10px;
      border-radius: 5px;
    }

    .det-avt {
      height: 70px;
      width: 70px;
      border-radius: 5px;
      background-color: rebeccapurple;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
`;
