import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineArrowBack } from "react-icons/md";
import { AppContext } from "../../helper/Context";
import { StyledActivityBar } from "./ActivityBar.styled";
import { GiCancel } from "react-icons/gi";

function ActivityBar() {
  const {
    friendImg,
    friendName,
    setFriendId,
    displaySearch,
    setDisplaySearch,
    searchText,
    setSearchText,
  } = useContext(AppContext);

  return (
    <StyledActivityBar>
      <MdOutlineArrowBack
        className="back pointer"
        onClick={() => setFriendId(false)}
      />
      <div className="btw row center" style={{ width: "100%" }}>
        <div className="row center gap-1">
          <div
            className="avatar"
            style={{ backgroundImage: `url(${friendImg})` }}
          ></div>
          <h3 className="cap">{friendName}</h3>
        </div>

        <div className="row center row-end">
          <BsSearch
            className="pointer"
            onClick={() => setDisplaySearch(!displaySearch)}
          />
        </div>
      </div>

      {displaySearch && (
        <div className="search-box">
          <input
            type="search"
            className="search-chats"
            placeholder="Search Text..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <GiCancel
            className="pointer"
            onClick={() => setDisplaySearch(!displaySearch)}
          />
        </div>
      )}
    </StyledActivityBar>
  );
}

export default ActivityBar;
