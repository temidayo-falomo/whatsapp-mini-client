import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { AppContext } from "../../helper/Context";
import { StyledActivityBar } from "./ActivityBar.styled";

function ActivityBar() {
  const { friendImg, friendName } = useContext(AppContext);
  return (
    <StyledActivityBar>
      <div className="row center gap-1">
        <div
          className="avatar"
          style={{ backgroundImage: `url(${friendImg})` }}
        ></div>
        <h3 className="cap">{friendName}</h3>
      </div>

      <div className="row">
        <BsSearch />
      </div>
    </StyledActivityBar>
  );
}

export default ActivityBar;
