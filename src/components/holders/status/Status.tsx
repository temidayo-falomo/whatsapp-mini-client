import React, { useContext } from "react";
import { StyledStatus } from "./Status.styled";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { AppContext } from "../../../helper/Context";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../../../firebase/firebase-config";
import { AiFillDelete } from "react-icons/ai";

function Status() {
  const { statusByUser, setDisplayStatus, filteredStatuses, setNumber } =
    useContext(AppContext);

  //Local States
  
  const [active, setActive] = useState<number>();
  const [replyText, setReplyText] = useState("");

  const handleIndex = (param: number) => {
    setActive(param);
  };

  // Handle Styling Of Slideshow Indicators

  const indicators = (index: any) => (
    <div className="indicators-w">
      <div
        className="indicator tiny-rect"
        onClick={() => handleIndex(index)}
      ></div>
    </div>
  );

  const messagesCollectionRef: any = collection(db, "messages");

  // Send A Reply To Other User's DM.

  const sendReply = async (
    e: React.FormEvent<HTMLFormElement>,
    statusRepliedTo: any,
    receiverId: string,
    receiverImg: string,
    userId: any
  ) => {
    e.preventDefault();
    setReplyText("");

    var time = new Date();

    let realTime = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    let msgObj = {
      senderImg: auth.currentUser?.photoURL,
      senderId: auth.currentUser?.uid,
      receiverImg: receiverImg,
      receiverId: receiverId,
      message: `Replied To Status "${statusRepliedTo}" : ` + " " + replyText,
      sentTime: realTime,
      timestamp: serverTimestamp(),
    };

    const userDoc = doc(db, "users", userId);

    await getDoc(userDoc).then((doc: any) => {
      let nuggle = doc.data().friends;

      const newState = nuggle.map((obj: any) =>
        obj.friendId === receiverId ? { ...obj, timestamp: time } : obj
      );

      const newFriend = {
        friends: newState,
      };

      updateDoc(userDoc, newFriend);
      setNumber(0);
    });

    await addDoc(messagesCollectionRef, msgObj);
  };

  //Delete Status(Only Displayed for Authorized User)

  const handleDeleteStatus = async (statusId: string) => {
    const statusDoc = doc(db, "status-uploads", statusId);
    await deleteDoc(statusDoc);
  };

  return (
    <StyledStatus>
      <div className="carousel">
        <Slide
          indicators={indicators}
          scale={1.4}
          infinite={false}
          transitionDuration={500}
        >
          {statusByUser
            ?.filter((val: any) => {
              return val.userId === filteredStatuses;
            })
            ?.map((data: any) => {
              return (
                <div className="each-slide-effect" key={data.id}>
                  <div
                    style={{ backgroundColor: data.statusColor }}
                    className="tall"
                  >
                    <div
                      className="top row btw"
                      style={{ alignItems: "flex-start" }}
                    >
                      <div className="row gap-1">
                        <div
                          className="avatar"
                          style={{ backgroundImage: `url(${data.userAvt})` }}
                        ></div>
                        <div className="col gap-5">
                          <h4 className="cap">{data.userName}</h4>
                          <span>Today at {data.realTime}</span>
                        </div>
                      </div>

                      <MdOutlineCancel
                        style={{ fontSize: "2rem" }}
                        className="pointer"
                        onClick={() => setDisplayStatus(false)}
                      />
                    </div>

                    <span
                      className="status-text"
                      style={{ fontFamily: `${data.fontStyle}` }}
                    >
                      {data.statusText}
                    </span>

                    {auth.currentUser?.uid !== data.userId ? (
                      <form
                        className="footer"
                        onSubmit={(e) =>
                          sendReply(
                            e,
                            data.statusText,
                            data.userId,
                            data.userAvt,
                            auth.currentUser?.uid
                          )
                        }
                      >
                        <input
                          type="text"
                          placeholder="Type a reply"
                          value={replyText}
                          required
                          onChange={(e) => setReplyText(e.target.value)}
                        />
                        <button>Send</button>
                      </form>
                    ) : (
                      <div
                        className="del row center pointer"
                        onClick={() => handleDeleteStatus(data.id)}
                      >
                        Delete
                        <AiFillDelete />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </Slide>
      </div>
    </StyledStatus>
  );
}

export default Status;
