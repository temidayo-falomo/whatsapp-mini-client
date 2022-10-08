import styled from "styled-components";
import img from "./bg.svg";

export const StyledDashboardRight = styled.div`
  background-image: url(${img});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media (max-width: 1000px) {
    position: fixed;
    bottom: 0;
    z-index: 9999999999999;
    background-color: #000;
    height: 100vh;
    width: 100%;
    overflow: hidden !important;
  }
`;
