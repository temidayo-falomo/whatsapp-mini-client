import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import DashboardRightErr from "../../components/holders/dashboard-right/DashboardRightErr";
import ProfileLeft from "../../components/holders/profile-left/ProfileLeft";
import { auth, db } from "../../firebase/firebase-config";
import { AppContext } from "../../helper/Context";
import { StyledProfile } from "./Profile.styled";

function Profile() {
  const { setUser } = useContext(AppContext);

  return (
    <StyledProfile>
      <ProfileLeft />
      <DashboardRightErr />
    </StyledProfile>
  );
}

export default Profile;
