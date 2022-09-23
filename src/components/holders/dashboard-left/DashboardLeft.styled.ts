import styled from "styled-components";

export const StyledDashboardLeft = styled.div`
  background-color: #000;
  color: #fff;
  position: relative;

  .top {
    display: flex;
    font-size: 2rem;
    padding: 30px 20px;
  }

  .avatar {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 2px royalblue solid;
    background-image: url("https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&w=1000&q=80");
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
    width: 95%;
    overflow: auto;

    .user {
      min-height: 70px;
      min-width: 70px;
      border: 2px royalblue solid;
      border-radius: 50%;
      background-color: black;
    }
  }

  .message-cards {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 20px;
  }

  .chat-circle {
    background-color: green;
    color: #fff;
    height: 80px;
    width: 80px;
    font-size: 2rem;
    border-radius: 50%;
    position: absolute;
    right: 1rem;
    bottom: 5%;
  }
`;
