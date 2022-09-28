import React, { useContext } from "react";
import AllStatuses from "../../components/holders/all-statuses/AllStatuses";
import AddStatusRight from "../../components/holders/add-status-right/AddStatusRight";
import { AppContext } from "../../helper/Context";
import { StyledStatusUploads } from "./StatusUploads.styled";
import Status from "../../components/holders/status/Status";

function StatusUploads() {
  const { displayStatus, setDisplayStatus } = useContext(AppContext);
  return (
    <StyledStatusUploads>
      <AllStatuses />
      {!displayStatus ? <AddStatusRight /> : <Status />}
    </StyledStatusUploads>
  );
}

export default StatusUploads;
