import React from "react";
import DashboardLeft from "../../components/holders/dashboard-left/DashboardLeft";
import DashboardRight from "../../components/holders/dashboard-right/DashboardRight";
import { StyledDashboard } from "./Dashboard.styled";

function Dashboard() {
  return (
    <StyledDashboard>
      <DashboardLeft />
      <DashboardRight />
    </StyledDashboard>
  );
}

export default Dashboard;
