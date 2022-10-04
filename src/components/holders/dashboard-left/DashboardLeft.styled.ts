import styled from "styled-components";

export const StyledDashboardLeft = styled.div`
  background-color: #000;
  color: #fff;
  position: relative;
  border-right: 1px rgb(43, 42, 42) solid;
  height: 100vh;
  overflow: auto;

  .detailed-users {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    height: 90vh;
    width: 100%;
    position: fixed;
    z-index: 99999;
    bottom: -100vh;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    transition: 1s;
    overflow: hidden;
    background-color: #000;
    border: 2px #041a1d solid;
    overflow: auto;
  }

  .detailed-users.active {
    bottom: 0;
    margin-bottom: auto;
    transition: 1s;
    display: block;
  }

  .top {
    display: flex;
    font-size: 2rem;
    padding: 30px 20px;

    a {
      color: #fff;
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
    border: 2px royalblue solid;
    background-position: center;
    background-size: cover;
  }

  .search-row {
    margin-top: 2rem;
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
      min-height: 70px;
      min-width: 70px;
      border: 2px royalblue solid;
      border-radius: 50%;
      background-color: rebeccapurple;
      cursor: pointer;
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
    height: 80px;
    width: 80px;
    font-size: 2rem;
    border-radius: 50%;
    position: sticky;
    right: 0;
    left: 80%;
    bottom: 5%;
    z-index: 999999999;
    margin-left: auto;
    margin-right: 1rem;
  }

  @media (max-width: 1000px) {
    height: 100vh;
    border: none;

    .message-cards {
      margin-bottom: 2rem;
    }
  }
`;
