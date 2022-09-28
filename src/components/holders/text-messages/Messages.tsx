import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import { auth, db } from "../../../firebase/firebase-config";
import { StyledMessages } from "./Messages.styled";
import { AppContext } from "../../../helper/Context";
import { AiFillDelete } from "react-icons/ai";

function Messages() {
  const {
    friendId,
    allMessages,
    setAllMessages,
    displayDelete,
    setDisplayDelete,
  } = useContext(AppContext);

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
        setAllMessages(
          msgs.sort((a: any, b: any) => a.timestamp - b.timestamp)
        );
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <StyledMessages>
      {allMessages
        ?.filter((val: any) => {
          return (
            val.receiverId === friendId &&
            val.senderId === auth.currentUser?.uid
          );
        })
        .map((data: any) => {
          return (
            <div
              key={data.id}
              className={
                data.senderId === auth.currentUser?.uid ? "right" : "left"
              }
            >
              <div
                className={
                  data.senderId === auth.currentUser?.uid
                    ? "bubble-right"
                    : "bubble-left"
                }
                onClick={() => setDisplayDelete(!displayDelete)}
              >
                {data.message}
                <span>{data.sentTime}</span>
              </div>

              {displayDelete && <AiFillDelete className="del" />}
            </div>
          );
        })}
    </StyledMessages>
  );
}

export default Messages;
