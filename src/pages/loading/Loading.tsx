import React from "react";
import { GiPadlock } from "react-icons/gi";
import { StyledLoading } from "./Loading.styled";

function Loading() {
  return (
    <StyledLoading>
      <div className="load-box col center">
        <div className="bar"></div>
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h4>WhatsApp Mini</h4>
        <div className="row">
          <p>
            <GiPadlock />
            End-to-end encrypted
          </p>
        </div>
      </div>
    </StyledLoading>
  );
}

export default Loading;
