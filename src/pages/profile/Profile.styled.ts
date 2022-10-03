import styled from "styled-components";

export const StyledProfile = styled.div`
  display: grid;
  grid-template-columns: 600px auto;
  min-height: 100vh;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;
