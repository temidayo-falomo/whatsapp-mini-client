import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../../firebase/firebase-config";
import { StyledMessageCard } from "./MessageCard.styled";

function MessageCard(props: any) {
  const [lastMsg, setLastMsg] = useState<any>([]);

  // collection ref
  const colRef = collection(db, "messages");

  useEffect(() => {
    try {
      // queries
      const q = query(
        colRef,
        where("senderId", ">=", auth.currentUser?.uid)
        // orderBy("timestamp", "desc")
      );

      // realtime collection's data
      onSnapshot(q, (snapshot) => {
        let msgs: any = [];
        snapshot.docs.forEach((doc) => {
          msgs.push({ ...doc.data(), id: doc.id });
        });
        setLastMsg(
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
    } catch (error) {
      console.log(error);
    }
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
          <p>{lastMsg && lastMsg[lastMsg.length - 1]?.message}</p>
        </div>
      </div>

      <div className="col center gap-5">
        <span>08:31pm</span>
        <div className="circle grid-center">
          <span>{lastMsg && [lastMsg.length]}</span>
        </div>
      </div>
    </StyledMessageCard>
  );
}

export default MessageCard;
