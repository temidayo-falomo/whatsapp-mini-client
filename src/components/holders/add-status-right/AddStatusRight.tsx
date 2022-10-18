import React, { useContext, useState } from "react";
import { BsFillPaletteFill } from "react-icons/bs";
import { MdEmojiEmotions } from "react-icons/md";
import { AppContext } from "../../../helper/Context";
import { StyledAddStatusRight } from "./AddStatusRight.styled";
import { RiSendPlaneFill } from "react-icons/ri";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebase-config";
import { GiCancel } from "react-icons/gi";

function AddStatusRight(props: any) {
  const { colors, fonts } = useContext(AppContext);

  //Local States & Variables

  const [currColor, setCurrColor] = useState(
    Math.floor(Math.random() * colors.length - 1)
  );
  const [statusText, setStatusText] = useState("");
  const [currentFont, setCurrentFont] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleColorChange = () => {
    setCurrColor(currColor + 1);
  };

  //IF check to set Current Color back to 0

  if (currColor > colors.length - 1) {
    setCurrColor(0);
  }

  if (currentFont > fonts.length - 1) {
    setCurrentFont(0);
  }

  const statusesCollectionRef = collection(db, "status-uploads");

  //Upload Status

  const sendStatus = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusText("");

    var time = new Date();

    let realTime = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    let msgObj = {
      userAvt: auth.currentUser?.photoURL,
      userName: auth.currentUser?.displayName,
      userId: auth.currentUser?.uid,
      realTime,
      statusText,
      statusColor: colors[currColor],
      fontStyle: fonts[currentFont],
      timestamp: serverTimestamp(),
    };

    await addDoc(statusesCollectionRef, msgObj);

    if (window.innerWidth < 1000) {
      props.setShowAdd(false);
    }
  };

  return (
    <>
      {props.showAdd && (
        <StyledAddStatusRight
          style={{ backgroundColor: colors[currColor] }}
          onSubmit={(e: any) => sendStatus(e)}
        >
          <div className="add-top row">
            <GiCancel
              onClick={() => props.setShowAdd(false)}
              className="pointer"
            />
          </div>
          <div className="mid">
            <input
              type="text"
              placeholder="Type A Status..."
              value={statusText}
              required
              onChange={(e) => setStatusText(e.target.value)}
              style={{ fontFamily: `${fonts[currentFont]}` }}
            />
          </div>
          <div className="row btw footer">
            <div className="row gap-1 center">
              <MdEmojiEmotions
                className={clicked ? "pointer actv" : "pointer"}
                onClick={() => setClicked(!clicked)}
              />
              <h3
                style={{ fontFamily: `${fonts[currentFont]}` }}
                className="pointer"
                onClick={() => {
                  setCurrentFont(currentFont + 1);
                }}
              >
                T
              </h3>
              <BsFillPaletteFill
                className="pointer"
                onClick={handleColorChange}
              />
            </div>

            <button>
              <RiSendPlaneFill />
            </button>
          </div>
        </StyledAddStatusRight>
      )}
    </>
  );
}

export default AddStatusRight;
