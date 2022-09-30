import React, { useContext, useEffect, useState } from "react";
import ActivityBar from "../../activity-bar/ActivityBar";
import { StyledDashboardRight } from "./DashboardRight.styled";
import Messages from "../text-messages/Messages";
import InputBar from "../../input-bar/InputBar";
import { AppContext } from "../../../helper/Context";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebase-config";

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
