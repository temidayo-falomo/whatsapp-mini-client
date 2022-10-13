import styled from "styled-components";

export const StyledActivityBar = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #000;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 999;
  padding-top: 2rem;

  .back {
    font-size: 2rem;
    margin-right: 0.8rem;
    display: none;
  }

  .avatar {
    height: 60px;
    width: 60px;
    border-radius: 10px;
    background-position: center;
    background-size: cover;
    background-color: rebeccapurple;
  }

  .search-box {
    position: absolute;
    bottom: -50px;
    z-index: 999;
    width: 50%;
    border-radius: 20px;
    overflow: hidden;
    left: 0;
    right: 0;
    margin: auto;
    min-width: 300px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;

    .pointer {
      font-size: 2rem;
      color: #008001;
    }

    input {
      width: 100%;
      padding: 15px;
      background-color: white;
      outline: none;
      border: none;
      border-radius: 30px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
  }

  @media (max-width: 1000px) {
    padding-left: 5px;

    .back {
      display: block;
    }
  }
`;
