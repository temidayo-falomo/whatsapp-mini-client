import styled from "styled-components";

export const StyledAllStatuses = styled.div`
  background-color: ${(props: any) =>
    props.theme === "light" ? "#fff" : "#000"};
  color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};

  border-right: 1px rgb(43, 42, 42) solid;
  position: relative;
  height: 100vh;
  padding-bottom: 1rem;

  .top-part {
    margin: 1rem;
    margin-top: 1.5rem;
    color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};

    a {
      font-size: 2rem;
      color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};
    }

    .prev {
      color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};
      font-weight: 600;
    }
  }

  .card-active {
    border-radius: 20px;

    h4 {
      color: green;
    }
  }

  .avatar {
    display: grid;
    place-content: center;
    text-align: center;
    font-size: 0.7rem;
    padding: 3px;
  }

  .status-card {
    padding: 10px;
    gap: 0.5rem;
    margin: 1rem 0;
    cursor: pointer;

    svg {
      min-width: 100px !important;
      max-width: 100px;
    }
    circle {
      stroke: rgb(196, 196, 196);
      stroke-width: 3;
    }
    .solid {
      stroke-dasharray: none;
    }
    .dashed {
      stroke-dasharray: 8, 8.5;
      padding: 20px;
    }
    .dotted {
      stroke-dasharray: 0.1, 12.5;
      stroke-linecap: round;
    }
    .txt {
      color: #fff;
      font-weight: bold;
      text-align: center;
      line-height: 100px;
      border-radius: 50%;
    }
  }

  .plus-icon {
    font-size: 4rem;
    position: fixed;
    bottom: 5%;
    right: 2rem;
    color: #fff;
    background-color: green;
    border: 2px #fff solid;
    border-radius: 50%;
    display: none;
    margin-left: auto;
    padding: 5px;
  }

  @media (max-width: 1000px) {
    overflow-y: auto !important;
    height: 100vh;

    .plus-icon {
      display: block;
    }
  }
`;
