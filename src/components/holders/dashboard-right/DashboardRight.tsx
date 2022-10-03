import React from "react";
import ActivityBar from "../../activity-bar/ActivityBar";
import { StyledDashboardRight } from "./DashboardRight.styled";
import Messages from "../text-messages/Messages";
import InputBar from "../../input-bar/InputBar";

function DashboardRight() {
  return (
    <StyledDashboardRight>
      <ActivityBar />
      <Messages />
      <InputBar />
    </StyledDashboardRight>
  );
}

export default DashboardRight;
