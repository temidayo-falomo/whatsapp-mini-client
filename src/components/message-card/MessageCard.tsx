import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../../firebase/firebase-config";
import { StyledMessageCard } from "./MessageCard.styled";

function MessageCard(props: any) {
  const [lastMsg1, setLastMsg1] = useState<any>();
  const [lastMsg2, setLastMsg2] = useState<any>();
  const [newMessageColor, setNewMessageColor] = useState(false);

  // collection ref
  const colRef = collection(db, "messages");

  useEffect(() => {
    // queries
    const q1 = query(colRef, where("senderId", "==", auth.currentUser?.uid));

    // realtime collection's data
    onSnapshot(q1, (snapshot) => {
      let msgs: any = [];
      snapshot.docs.forEach((doc) => {
        msgs.push({ ...doc.data(), id: doc.id });
        // setNewMessageColor(true);
      });

      setLastMsg1(
        msgs
          .filter((val: any) => {
            return (
              val.receiverId === props.friendId &&
              val.senderId === auth.currentUser?.uid
            );
          })
          .sort((a: any, b: any) => a.timestamp - b.timestamp)
      );
    });

    const q2 = query(colRef, where("receiverId", "==", auth.currentUser?.uid));
    onSnapshot(q2, (snapshot) => {
      let msgs: any = [];
      setNewMessageColor(true);
      snapshot.docs.forEach((doc) => {
        msgs.push({ ...doc.data(), id: doc.id });
        // setNewMessageColor(true);
      });

      setLastMsg2(
        msgs
          .filter((val: any) => {
            return (
              val.receiverId === auth.currentUser?.uid &&
              val.senderId === props.friendId
            );
          })
          .sort((a: any, b: any) => a.timestamp - b.timestamp)
      );
    });
  }, []);

  return (
    <StyledMessageCard>
      <div className="row center gap-1">
        <div
          className="profile-pic"
          style={{ backgroundImage: `url(${props.friendAvatar})` }}
        ></div>
        <div className="col gap-5">
          <h4 className="cap">{props.friendName}</h4>
          <p className={newMessageColor ? "blue-txt" : ""}>
            {lastMsg1 &&
              lastMsg2 &&
              [...lastMsg1, ...lastMsg2].sort(
                (a: any, b: any) => a.timestamp - b.timestamp
              )[[...lastMsg1, ...lastMsg2].length - 1]?.message}
          </p>
        </div>
      </div>

      <div className="col center gap-5">
        <span>
          {" "}
          {lastMsg1 &&
            lastMsg2 &&
            [...lastMsg1, ...lastMsg2].sort(
              (a: any, b: any) => a.timestamp - b.timestamp
            )[[...lastMsg1, ...lastMsg2].length - 1]?.sentTime}
        </span>
        <div className="circle grid-center">
          <span>{lastMsg1 && [lastMsg1.length + lastMsg2.length]}</span>
        </div>
      </div>
    </StyledMessageCard>
  );
}

export default MessageCard;
