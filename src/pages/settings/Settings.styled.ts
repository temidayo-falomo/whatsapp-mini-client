import styled from "styled-components";

export const StyledSettings = styled.div`
  display: grid;
  grid-template-columns: 550px auto;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;
