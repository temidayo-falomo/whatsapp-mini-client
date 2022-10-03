import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import DashboardRightErr from "../../components/holders/dashboard-right/DashboardRightErr";
import ProfileLeft from "../../components/holders/profile-left/ProfileLeft";
import { auth, db } from "../../firebase/firebase-config";
import { AppContext } from "../../helper/Context";
import { StyledProfile } from "./Profile.styled";

function Profile() {
  const { setUser } = useContext(AppContext);

  const getUser = async () => {
    const id: any = auth.currentUser?.uid;
    const userDoc = doc(db, "users", id);

    await getDoc(userDoc).then((doc: any) => {
      setUser(doc.data());
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <StyledProfile>
      <ProfileLeft />
      <DashboardRightErr />
    </StyledProfile>
  );
}

export default Profile;
