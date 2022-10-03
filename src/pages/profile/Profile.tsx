import React from "react";
import DashboardRightErr from "../../components/holders/dashboard-right/DashboardRightErr";
import ProfileLeft from "../../components/holders/profile-left/ProfileLeft";
import ProfileRight from "../../components/holders/profile-right/ProfileRight";
import { StyledProfile } from "./Profile.styled";

function Profile() {
  return (
    <StyledProfile>
      <ProfileLeft />
      <DashboardRightErr />
    </StyledProfile>
  );
}

export default Profile;
