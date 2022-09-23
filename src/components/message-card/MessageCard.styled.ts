import styled from "styled-components";

export const StyledMessageCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  /* background-color: #D1E4E8; */
  border-radius: 10px;

  :hover {
    border: 2px royalblue solid;
  }

  .profile-pic {
    height: 70px;
    width: 70px;
    border-radius: 10px;
    background-image: url("https://media.istockphoto.com/photos/laughing-positive-young-afro-american-man-in-red-shirt-in-good-mood-picture-id1292157100?b=1&k=20&m=1292157100&s=170667a&w=0&h=HOrgkOU5i7p5yhr3ShNl7tgSTo3G68cqHNuGUeApy6o=");
    background-position: center;
    background-size: cover;
  }

  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #dff6f4;
    color: #128c7e;
    font-size: .8rem;
  }
`;
