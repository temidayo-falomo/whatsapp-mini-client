import styled from "styled-components";

export const StyledStatus = styled.div`
  background-color: gray;
  position: relative;
  overflow: auto;

  .indicators {
    position: absolute;
    top: 1rem;
    left: 0;
    right: 0;
    width: 95%;
    display: flex;
  }

  .indicators-w {
    .indicator {
      margin: 0 1rem;
      width: 35px;
      height: 2px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 10px;
      padding: 4px !important;
      cursor: pointer;
    }

    li {
      position: relative;
      padding: 0;
    }
  }

  .indicators-w.active {
    background-color: #fff !important;
    border-radius: 16px;
  }

  .top {
    position: absolute;
    left: 0;
    right: 0;
    top: 4rem;
    margin: auto;
    width: 95%;
    height: 80px;
    z-index: 9999 !important;

    .avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 2px #fff solid;
      background-size: cover;
      background-position: center;
    }
  }

  .tiny-rects {
    position: absolute;
    top: 7rem;
    width: 90%;
    display: flex;
    justify-content: center;

    .tiny-rect {
      width: 40px;
      height: 6px;
      background-color: #fff;
      border-radius: 10px;
    }
  }

  .footer {
    width: 80%;
    height: 60px;
    position: absolute;
    bottom: 5rem;
    left: 10%;
    right: 0%;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    overflow: hidden;

    input {
      height: 100%;
      width: 100%;
      padding: 0 30px;
      outline: none;
      border: none;
    }

    button {
      width: 200px;
    }
  }

  .del {
    position: absolute;
    bottom: 5rem;

    :hover {
      color: orangered;
    }
  }

  .carousel {
    height: 100vh;
    width: 100% !important;
  }

  .each-slide-effect > .tall {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 100vh;
    position: relative;
    text-align: center;

    .status-text {
      font-size: 3.5rem;
      max-width: 95%;
    }
  }

  @media (max-width: 1000px) {
    position: absolute;
    height: 100vh;
    width: 100%;
    z-index: 999;

    .status-text {
      font-size: 2.3rem !important;
    }
  }
`;
