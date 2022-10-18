import React from "react";
import DashboardRightErr from "../../components/holders/dashboard-right/DashboardRightErr";
import SettingsLeft from "../../components/holders/settings-left/SettingsLeft";
import { StyledSettings } from "./Settings.styled";


function Settings() {
  return (
    <StyledSettings>
      <SettingsLeft />
      <DashboardRightErr />
    </StyledSettings>
  );
}

export default Settings;
