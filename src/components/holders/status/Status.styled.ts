import styled from "styled-components";

export const StyledStatus = styled.div`
  background-color: gray;
  position: relative;
  overflow: auto;

  .top {
    position: absolute;
    top: 1rem;
    left: 2rem;
    width: 95%;
    height: 80px;
    z-index: 9999 !important;
    border-radius: 10px;
    padding: 0 2%;

    .avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 2px red solid;
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
    bottom: 2rem;
    left: 10%;
    right: 0%;
    background-color: #fff;
    border-radius: 20px;
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

    .status-text {
      font-size: 4rem;
    }
  }
`;
