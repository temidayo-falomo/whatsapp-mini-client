import React, { useContext, useEffect, useState } from "react";
import { MdEmojiEmotions } from "react-icons/md";
import { StyledInputBar } from "./InputBar.styled";
import { FaPaperclip } from "react-icons/fa";
import { auth, db } from "../../firebase/firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import bcrypt from "bcryptjs";
import { AppContext } from "../../helper/Context";
import EmojiPicker from "emoji-picker-react";
import { AiOutlineSend } from "react-icons/ai";

function InputBar() {
  const { messageText, setMessageText, friendId, friendImg } =
    useContext(AppContext);

  const [showEmojis, setShowEmojis] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [typing, setTyping] = useState(false);

  const messagesCollectionRef: any = collection(db, "messages");

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessageText("");

    var time = new Date();

    let realTime = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    let msgObj = {
      senderImg: auth.currentUser?.photoURL,
      senderId: auth.currentUser?.uid,
      receiverImg: friendImg,
      receiverId: friendId,
      message: messageText,
      sentTime: realTime,
      timestamp: serverTimestamp(),
    };

    await addDoc(messagesCollectionRef, msgObj);
  };

  useEffect(() => {
    if (messageText === "") {
      setTyping(false);
    }
  }, [typing, messageText]);

  return (
    <StyledInputBar>
      <MdEmojiEmotions
        className={clicked ? "pointer actv" : "pointer"}
        onClick={() => {
          setShowEmojis(!showEmojis);
          setClicked(!clicked);
        }}
      />
      {showEmojis && (
        <div className="emojis">
          <EmojiPicker
            onEmojiClick={(param: any) => {
              setMessageText(messageText + param?.emoji);
            }}
          />
        </div>
      )}
      <FaPaperclip className="pointer" />
      <form onSubmit={(e: any) => sendMessage(e)} style={{ width: "90%" }}>
        <input
          type="text"
          placeholder="Type A Message"
          value={messageText}
          required
          onChange={(e) => {
            setMessageText(e.target.value);
            setTyping(true);
          }}
        />
        {typing && (
          <button className="grid-center">
            <AiOutlineSend className="send" />
          </button>
        )}
      </form>

      {/* <BsFillMicFill className="pointer" /> */}
    </StyledInputBar>
  );
}

export default InputBar;
