import React, { useContext, useState } from "react";
import { BsFillPaletteFill } from "react-icons/bs";
import { MdEmojiEmotions } from "react-icons/md";
import { AppContext } from "../../../helper/Context";
import { StyledAddStatusRight } from "./AddStatusRight.styled";
import { RiSendPlaneFill } from "react-icons/ri";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebase-config";

function AddStatusRight() {
  const { colors } = useContext(AppContext);
  const [currColor, setCurrColor] = useState(0);
  const [statusText, setStatusText] = useState("");

  const handleColorChange = () => {
    setCurrColor(currColor + 1);
  };

  if (currColor > colors.length - 1) {
    setCurrColor(0);
  }

  const statusesCollectionRef = collection(db, "status-uploads");

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
      fontStyle: "sans-serif",
      timestamp: serverTimestamp(),
    };

    await addDoc(statusesCollectionRef, msgObj);
  };

  return (
    <StyledAddStatusRight
      style={{ backgroundColor: colors[currColor] }}
      onSubmit={(e: any) => sendStatus(e)}
    >
      <div className="mid">
        <input
          type="text"
          placeholder="Type A Status..."
          value={statusText}
          onChange={(e) => setStatusText(e.target.value)}
        />
      </div>
      <div className="row btw footer">
        <div className="row gap-1 center">
          <MdEmojiEmotions className="pointer" />
          <h3 className="pointer">T</h3>
          <BsFillPaletteFill className="pointer" onClick={handleColorChange} />
        </div>

        <button>
          <RiSendPlaneFill />
        </button>
      </div>
    </StyledAddStatusRight>
  );
}

export default AddStatusRight;
