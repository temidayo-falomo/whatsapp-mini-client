import React, { useContext, useState } from "react";
import AllStatuses from "../../components/holders/all-statuses/AllStatuses";
import AddStatusRight from "../../components/holders/add-status-right/AddStatusRight";
import { AppContext } from "../../helper/Context";
import { StyledStatusUploads } from "./StatusUploads.styled";
import Status from "../../components/holders/status/Status";

function StatusUploads() {
  const { displayStatus } = useContext(AppContext);
  const [showAdd, setShowAdd] = useState(true);
  
  return (
    <StyledStatusUploads>
      <AllStatuses setShowAdd={setShowAdd} />
      {!displayStatus ? (
        <AddStatusRight setShowAdd={setShowAdd} showAdd={showAdd} />
      ) : (
        <Status />
      )}
    </StyledStatusUploads>
  );
}

export default StatusUploads;
