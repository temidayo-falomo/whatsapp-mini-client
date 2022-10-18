import styled from "styled-components";

export const StyledProfileLeft = styled.form`
  padding: 20px;
  border-right: 1px rgb(43, 42, 42) solid;
  align-items: center;
  overflow: auto;
  padding-bottom: 4rem;

  input {
    padding: 10px;
    border-radius: 10px;
    border: none;
  }

  button {
    padding: 10px;
    border-radius: 10px;
    background-color: green;
    color: #fff;
  }

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

  @media (max-width: 1000px) {
    background-color: ${(props: any) =>
      props.theme === "light" ? "#fff" : "#000"};
    color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};

    .top {
      a {
        color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};
      }
    }
  }
`;
