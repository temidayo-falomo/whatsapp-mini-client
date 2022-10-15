import React from "react";
import { StyledDashboardRightErr } from "./DashboardRightErr.styled";

function DashboardRightErr() {
  return (
    <StyledDashboardRightErr>
      <div className="rect col center">
        <img src="./assets/phone-ico.svg" alt="" />
        <h2>Keep your Google connected.</h2>
        <p>Whatsapp-Mini connects to your Account to sync messages.</p>
      </div>
    </StyledDashboardRightErr>
  );
}

export default DashboardRightErr;
