import React from "react";
import { StyledDashboardRightErr } from "./DashboardRightErr.styled";

function DashboardRightErr() {
  return (
    <StyledDashboardRightErr>
      <div className="rect col center">
        <img src="./assets/phone-ico.svg" alt="" />
        <h2>Keep your phone connected</h2>
        <p>
          Whatsapp connects to your phone to sync messages. To reduce data
          usage. connect your phone to Wi-Fi.
        </p>
      </div>
    </StyledDashboardRightErr>
  );
}

export default DashboardRightErr;
