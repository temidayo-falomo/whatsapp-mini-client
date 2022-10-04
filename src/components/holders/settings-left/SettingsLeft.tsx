import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StyledSettingsLeft } from "./SettingsLeft.styled";
import { MdArrowBack, MdWallpaper } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import { FcCancel } from "react-icons/fc";
import { auth } from "../../../firebase/firebase-config";
import { AppContext } from "../../../helper/Context";

function SettingsLeft() {
  const { user } = useContext(AppContext);
  return (
    <StyledSettingsLeft>
      <div className="top row gap-1 center">
        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MdArrowBack />
        </Link>
        <h3>Settings</h3>
      </div>

      <div className="rect row center gap-1">
        <div
          className="avatar"
          style={{ backgroundImage: `url(${auth.currentUser?.photoURL})` }}
        ></div>
        <div className="col gap-5">
          <h4>{user?.username}</h4>
          <span>{user?.userAbout}</span>
        </div>
      </div>

      <div className="settings col">
        <div className="row underline gap-1 center">
          <CgDarkMode />
          <h4>Theme</h4>
        </div>
        <div className="row underline gap-1 center">
          <MdWallpaper />
          <h4>Wallpaper</h4>
        </div>
        <div className="row underline gap-1 center">
          <FcCancel />
          <h4>Blocked</h4>
        </div>
      </div>
    </StyledSettingsLeft>
  );
}

export default SettingsLeft;
