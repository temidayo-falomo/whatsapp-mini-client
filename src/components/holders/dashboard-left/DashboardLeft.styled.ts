import styled from "styled-components";

export const StyledDashboardLeft = styled.div`
  background-color: ${(props: any) =>
    props.theme === "light" ? "#fff" : "#000"};
  color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};
  position: relative;
  border-right: ${(props: any) =>
    props.theme === "light"
      ? "1px gainsboro solid"
      : "1px rgb(43, 42, 42) solid"};
  height: 100vh;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0.2em;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: #008001;
  }

  .detailed-users {
    background-color: ${(props: any) =>
      props.theme === "light" ? "#fff" : "#000"};
    color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};
    width: 100%;
    position: absolute;
    z-index: 99999;
    bottom: 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    transition: 0.5s;
    overflow: auto;
    height: 0;

    ::-webkit-scrollbar {
      width: 0;
    }
  }

  .detailed-users.active {
    bottom: 0;
    margin-bottom: auto;
    transition: 0.5s;
    display: block;
    height: 95vh;
    border: 2px #041a1d solid;
    border-right: none;
    border-left: none;
  }

  .top {
    display: flex;
    font-size: 2rem;
    padding: 30px 20px;

    a {
      color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};
    }

    .round {
      padding: 5px;
      border-radius: 50%;
      background-color: #08363b;
      background-size: cover;
      background-position: center;
    }

    .dropdown {
      background-color: #08363b;
      width: 120px;
      position: absolute;
      top: 5rem;
      z-index: 999;
      right: 1rem;
      border-radius: 5px;
      padding: 0.5rem;

      a {
        font-size: 1rem;
        padding: 10px 5px;
        cursor: pointer;
        border-radius: 5px;
        color: ${(props: any) =>
          props.theme === "light" ? "#fff" : "#fff"} !important;
      }

      a:hover {
        background-color: #041a1d;
      }
    }
  }

  .avatar {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .search-row {
    margin-top: 0.5rem;
    position: relative;
    padding: 0 20px;

    input {
      width: 100%;
      height: 100%;
      padding: 20px 10px;
      border-radius: 20px;
      border: 1px gray solid;
      background-color: ghostwhite;
    }

    .search-dropdown {
      width: 100%;
      height: 300px;
      border-radius: 20px;
      position: absolute;
      top: 5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      background-color: #fff;
      display: none;
    }
  }

  .users {
    margin: 1rem auto;
    width: 100%;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 0;
    }

    .user {
      width: 80px;
      height: 80px;
      min-height: 80px;
      min-width: 80px;
      border: 2px royalblue solid;
      border-radius: 50%;
      background-color: rebeccapurple;
      display: grid;
      place-content: center;
      overflow: hidden;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      button {
        padding: 5px 9px;
        border-radius: 10px;
        font-weight: 600;
        /* From https://css.glass */
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
    }
  }

  .message-cards {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 20px;
  }

  .card-active {
    border-radius: 10px;
    background-color: royalblue;
  }

  .chat-circle {
    background-color: green;
    color: #fff;
    height: 70px;
    width: 70px;
    font-size: 1.8rem;
    border-radius: 50%;
    position: fixed;
    left: 450px;
    bottom: 8%;
    z-index: 999999999;
    margin-left: auto;
    margin-right: 1rem;
  }

  @media (max-width: 1000px) {
    height: 100vh;
    border: none;

    .chat-circle {
      left: 0;
      right: 2rem;
    }

    .detailed-users.active {
      position: fixed;
    }

    .message-cards {
      margin-bottom: 2rem;
    }
  }
`;
