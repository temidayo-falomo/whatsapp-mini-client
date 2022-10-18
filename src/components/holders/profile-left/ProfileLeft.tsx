import React, { useContext, useState } from "react";
import { StyledProfileLeft } from "./ProfileLeft.styled";
import { FiEdit } from "react-icons/fi";
import { auth, db } from "../../../firebase/firebase-config";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import { AppContext } from "../../../helper/Context";
import { doc, updateDoc } from "firebase/firestore";

function ProfileLeft() {
  const { user, theme } = useContext(AppContext);
  const [showEdit, setShowEdit] = useState(false);

  const [username, setUserName] = useState(user?.username);
  const [userAbout, setUserAbout] = useState(user?.userAbout);

  //Update Current User's Information in Firestore

  const handleUpdateUserInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    setShowEdit(!showEdit);
    e.preventDefault();
    let id: any = auth.currentUser?.uid;
    const userDoc = doc(db, "users", id);
    await updateDoc(userDoc, {
      userAbout,
      username,
    });
  };

  return (
    <StyledProfileLeft
      onSubmit={(e: any) => handleUpdateUserInfo(e)}
      theme={theme}
    >
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
          <FiEdit className="pointer" onClick={() => setShowEdit(!showEdit)} />
        </div>
        <div className="col">
          {!showEdit ? (
            <h5 className="cap">{user?.username}</h5>
          ) : (
            <div
              className="row center btw gap-1"
              style={{ marginBottom: "1rem" }}
            >
              <input
                type="text"
                style={{ width: "100%", height: "100%" }}
                placeholder={user?.username}
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <button>Send</button>
            </div>
          )}
          <p>
            This is not your username or pin. This name will be visible to your
            WhatsApp-Mini contacts.
          </p>
        </div>
      </div>

      <div className="rect col">
        <div className="row btw">
          <span>About</span>
          <FiEdit className="pointer" onClick={() => setShowEdit(!showEdit)} />
        </div>
        <div className="col">
          {!showEdit ? (
            <p>{user?.userAbout}</p>
          ) : (
            <div
              className="row center btw gap-1"
              style={{ marginBottom: "1rem" }}
            >
              <input
                type="text"
                style={{ width: "100%" }}
                placeholder={user?.userAbout}
                value={userAbout}
                onChange={(e) => setUserAbout(e.target.value)}
              />
              <button>Send</button>
            </div>
          )}
        </div>
      </div>
    </StyledProfileLeft>
  );
}

export default ProfileLeft;
