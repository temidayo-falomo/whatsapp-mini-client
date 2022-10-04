import styled from "styled-components";

export const StyledDashboard = styled.div`
  border: 2px black solid;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 550px auto;
  overflow: hidden;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 0.8em;
    }

    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    ::-webkit-scrollbar-thumb {
      background-color: #ffd163;
    }
  }
`;
