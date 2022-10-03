import React from "react";
import { StyledProfileLeft } from "./ProfileLeft.styled";
import { FiEdit } from "react-icons/fi";
import { auth } from "../../../firebase/firebase-config";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

function ProfileLeft() {
  return (
    <StyledProfileLeft>
      <div className="top row gap-1 center">
        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MdArrowBack className="pointer" />
        </Link>

        <h3>Profile</h3>
      </div>
      <div
        className="avatar"
        style={{ backgroundImage: `url(${auth.currentUser?.photoURL})` }}
      ></div>

      <div className="rect col">
        <div className="row btw">
          <span>Your Name</span>
          <FiEdit className="pointer" />
        </div>
        <div className="col">
          <h5 className="cap">{auth.currentUser?.displayName}</h5>
          <p>
            This is not your username or pin. This name will be visibile to your
            WhatsApp contacts.
          </p>
        </div>
      </div>

      <div className="rect col">
        <div className="row btw">
          <span>About</span>
          <FiEdit className="pointer" />
        </div>
        <div className="col">
          <p>
            Notification off, please expect delayed revert. Call if very urgent.
          </p>
        </div>
      </div>
    </StyledProfileLeft>
  );
}

export default ProfileLeft;
