import styled from "styled-components";

export const StyledMessageCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;

  .new-txt {
    color: greenyellow;
  }

  .col {
    span {
      text-align: center;
    }
  }

  .profile-pic {
    height: 70px;
    width: 70px;
    min-width: 70px;
    max-width: 70px;
    border-radius: 10px;
    background-position: center;
    background-size: cover;
    background-color: rebeccapurple;
  }

  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #dff6f4;
    color: #128c7e;
    font-size: 0.8rem;
  }
`;
