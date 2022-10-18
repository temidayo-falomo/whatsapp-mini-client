import styled from "styled-components";

export const StyledDashboardRightErr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props: any) =>
    props.theme === "light" ? "#fff" : "#000"};
  color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};
  transition: 0.5s ease;

  .rect {
    gap: 1rem;
  }

  p {
    width: 70%;
    line-height: 27px;
  }

  img {
    width: 250px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
