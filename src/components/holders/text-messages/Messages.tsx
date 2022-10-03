import React, { useContext, useEffect, useRef } from "react";
import { auth, db } from "../../../firebase/firebase-config";
import { StyledMessages } from "./Messages.styled";
import { AppContext } from "../../../helper/Context";
import { AiFillDelete } from "react-icons/ai";

import ScrollToBottom from "react-scroll-to-bottom";

function Messages() {
  const {
    friendId,
    displayDelete,
    setDisplayDelete,
    newMsg2,
    newMsg1,
    searchText,
  } = useContext(AppContext);

  return (
    <StyledMessages>
      <ScrollToBottom className="heigh">
        {[...newMsg1, ...newMsg2]
          ?.sort((a: any, b: any) => a.timestamp - b.timestamp)
          .filter((val: any) => {
            return (
              (val.receiverId === auth.currentUser?.uid &&
                val.senderId === friendId) ||
              (val.receiverId === friendId &&
                val.senderId === auth.currentUser?.uid)
            );
          })
          .filter((data: any) => {
            if (searchText == "") {
              return data;
            } else if (
              data.message.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return data;
            }
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
      </ScrollToBottom>
    </StyledMessages>
  );
}

export default Messages;
