import styled from "styled-components";

export const StyledLoading = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  font-family: "Plus Jakarta Sans", sans-serif;


  .load-box {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;

    p {
      color: gainsboro;
      display: flex;
      align-items: center;
      gap: .3rem;
    }
  }

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 60px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: royalblue;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;
