import styled from "styled-components";
import img from "./bg.svg";

export const StyledDashboardRight = styled.div`
  /* background-image: url(${img}); */
  background-image: url("https://i.pinimg.com/originals/85/ec/df/85ecdf1c3611ecc9b7fa85282d9526e0.jpg");
  background-size: contain;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media (max-width: 1000px) {
    position: fixed;
    bottom: 0;
    z-index: 9999999999999;
    background-color: #000;
    height: 94vh;
    width: 100%;
    overflow: hidden !important;
  }
`;
