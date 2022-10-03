import styled from "styled-components";

export const StyledProfileLeft = styled.div`
  padding: 20px;
  border-right: 1px rgb(43, 42, 42) solid;
  align-items: center;
  overflow: auto;

  .top {
    color: #fff;
    margin-bottom: 3rem;

    a {
      font-size: 2rem;
      color: #fff;
    }
  }

  .avatar {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    border: 2px blue solid;
    margin: 2rem auto;
    background-position: center;
    background-size: cover;
    background-color: rebeccapurple;
  }

  .rect {
    margin-top: 2rem;
    gap: 1rem;

    h5 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    p {
      width: 85%;
    }
  }
`;
