import styled from "styled-components";

export const StyledSettingsLeft = styled.div`
  border-right: 1px rgb(43, 42, 42) solid;
  height: 100vh;

  .top {
    margin: 2rem 1rem;

    a {
      font-size: 2rem;
    }
  }

  .rect {
    margin: 4rem 0;
    width: 95%;
    margin-left: auto;

    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 2px blue solid;
      background-color: rebeccapurple;
      background-size: cover;
      background-position: center;
    }
  }

  .settings {
    gap: 2rem;
    width: 95%;
    margin-left: auto;
  }

  .underline {
    border-bottom: 1px rgb(43, 42, 42) solid;
    padding: 20px;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    background-color: ${(props: any) =>
      props.theme === "light" ? "#fff" : "#000"};
    color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};
    transition: 0.5s ease;

    .top {
      a {
        color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};
      }
    }
  }
`;
