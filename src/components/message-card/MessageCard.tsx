import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BsCheckAll } from "react-icons/bs";
import { auth, db } from "../../firebase/firebase-config";
import { StyledMessageCard } from "./MessageCard.styled";

function MessageCard(props: any) {
  //Local States
  const [lastMsg1, setLastMsg1] = useState<any>([]);
  const [lastMsg2, setLastMsg2] = useState<any>([]);

  //Logic to get date in text format.
  let time = new Date();
  let realTime = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  // Messages collection ref
  const colRef = collection(db, "messages");

  useEffect(() => {
    // All Queries
    const q1 = query(colRef, where("senderId", "==", auth.currentUser?.uid));
    const q2 = query(colRef, where("receiverId", "==", auth.currentUser?.uid));

    // Both Snapshots are basically making respective queries for q1 & q2
    // Whilst also respectively updating respective states.

    onSnapshot(q1, (snapshot) => {
      let msgs: any = [];
      snapshot.docs.forEach((doc) => {
        msgs.push({ ...doc.data(), id: doc.id });
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

    onSnapshot(q2, (snapshot) => {
      let msgs: any = [];

      snapshot.docs.forEach((doc) => {
        msgs.push({ ...doc.data(), id: doc.id });
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
  }, [props.timestamp]);

  // Variable to combine & sort the result of both seperate queries together.
  const jointMsgsArr = [...lastMsg1, ...lastMsg2].sort(
    (a: any, b: any) => a.timestamp - b.timestamp
  );


  return (
    <StyledMessageCard>
      <div className="row center gap-1">
        <div
          className="profile-pic"
          style={{ backgroundImage: `url(${props.friendAvatar})` }}
        ></div>
        <div className="col gap-5">
          <h4 className="cap">{props.friendName}</h4>
          <p
            className={
              auth.currentUser?.uid !==
                jointMsgsArr[jointMsgsArr.length - 1]?.senderId &&
              realTime === jointMsgsArr[jointMsgsArr.length - 1]?.sentTime
                ? "new-txt"
                : ""
            }
          >
            {jointMsgsArr[jointMsgsArr.length - 1]?.message}
          </p>
        </div>
      </div>

      <div className="col center gap-5">
        <span>{jointMsgsArr[jointMsgsArr.length - 1]?.sentTime}</span>
        <BsCheckAll
          className={
            auth.currentUser?.uid !==
              jointMsgsArr[jointMsgsArr.length - 1]?.senderId &&
            realTime === jointMsgsArr[jointMsgsArr.length - 1]?.sentTime
              ? "new-txt"
              : "check"
          }
        />
      </div>
    </StyledMessageCard>
  );
}

export default MessageCard;
