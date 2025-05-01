import styled from "styled-components";

export const StyledAllStatuses = styled.div`
  background-color: ${(props: any) =>
    props.theme === "light" ? "#fff" : "#000"};
  color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};

  border-right: 1px rgb(43, 42, 42) solid;
  position: relative;
  height: 100vh;
  padding-bottom: 1rem;
  overflow-y: auto;

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
    gap: 1rem;
    margin: 0.2rem 0;
    cursor: pointer;

    .txt {
      color: #fff;
      font-weight: bold;
      text-align: center;
      line-height: 100px;
      border-radius: 50%;
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
    }

    .txt-content {
      //ellipsis
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      text-align: center;
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
