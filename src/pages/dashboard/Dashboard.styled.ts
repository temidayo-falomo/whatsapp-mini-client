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
  }
`;
