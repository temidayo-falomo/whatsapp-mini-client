import styled from "styled-components";

export const StyledAllStatuses = styled.div`
  background-color: #000;
  border-right: 1px rgb(43, 42, 42) solid;

  .top-part {
    margin: 1rem 2rem;

    .prev {
      color: #fff;
      fill: #fff;
      background-color: #fff;
      border-radius: 50%;
      padding: 5px;
      font-size: 2rem;
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
    padding: 10px 20px;
    gap: 0.5rem;
    margin: 1rem 1rem;
    cursor: pointer;

    svg {
      min-height: 100px !important;
      min-width: 100px !important;
      max-height: 100px;
      max-width: 100px;
    }
    circle {
      stroke: green;
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
`;
