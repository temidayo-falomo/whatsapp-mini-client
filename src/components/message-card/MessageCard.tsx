import React from "react";
import { StyledMessageCard } from "./MessageCard.styled";

function MessageCard() {
  
  return (
    <StyledMessageCard>
      <div className="row center gap-1">
        <div className="profile-pic"></div>
        <div className="col gap-5">
          <h4>Emmanuel Kendrick</h4>
          <p>Hello</p>
        </div>
      </div>

      

      <div className="col center gap-5">
        <span>08:31pm</span>
        <div className="circle grid-center">
          <span>2</span>
        </div>
      </div>
    </StyledMessageCard>
  );
}

export default MessageCard;
