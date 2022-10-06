import React, { useContext } from "react";
import DashboardLeft from "../../components/holders/dashboard-left/DashboardLeft";
import DashboardRight from "../../components/holders/dashboard-right/DashboardRight";
import DashboardRightErr from "../../components/holders/dashboard-right/DashboardRightErr";
import { auth } from "../../firebase/firebase-config";
import { AppContext } from "../../helper/Context";
import { StyledDashboard } from "./Dashboard.styled";

function Dashboard() {
  const { friendId } = useContext(AppContext);
  return (
    <StyledDashboard>
      {auth.currentUser?.uid && <DashboardLeft />}
      {friendId ? <DashboardRight /> : <DashboardRightErr />}
    </StyledDashboard>
  );
}

export default Dashboard;
