import styled from "styled-components";

export const StyledStatusUploads = styled.div`
  display: grid;
  grid-template-columns: 500px auto;
  height: 100vh;
  overflow: auto;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
`;
