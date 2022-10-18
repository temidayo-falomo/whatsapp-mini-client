import React, { useContext } from "react";
import { auth, db } from "../../../firebase/firebase-config";
import { StyledMessages } from "./Messages.styled";
import { AppContext } from "../../../helper/Context";
import { AiFillDelete } from "react-icons/ai";

import ScrollToBottom from "react-scroll-to-bottom";
import { deleteDoc, doc } from "firebase/firestore";

function Messages() {
  const {
    friendId,
    displayDelete,
    setDisplayDelete,
    newMsg2,
    newMsg1,
    searchText,
  } = useContext(AppContext);

  //Delete Single or Multiple Messages

  const deleteMessage = async (messageId: any) => {
    const messageDc = doc(db, "messages", messageId);
    await deleteDoc(messageDc);
  };

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
            if (searchText === "") {
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
                  data.senderId === auth.currentUser?.uid
                    ? "right row"
                    : "left row"
                }
              >
                <div
                  onClick={() => setDisplayDelete(!displayDelete)}
                  className="row center gap-5"
                >
                  <div
                    className={
                      data.senderId === auth.currentUser?.uid ? "none" : "circ"
                    }
                    style={{ backgroundImage: `url(${data.senderImg})` }}
                  ></div>
                  <div
                    className={
                      data.senderId === auth.currentUser?.uid
                        ? "bubble-right center row"
                        : "bubble-left center row"
                    }
                  >
                    <div>
                      {data.message}
                      <span>{data.sentTime}</span>
                    </div>
                  </div>
                </div>

                {displayDelete && auth.currentUser?.uid === data.senderId && (
                  <AiFillDelete
                    className="del pointer"
                    onClick={() => deleteMessage(data.id)}
                  />
                )}
              </div>
            );
          })}
      </ScrollToBottom>
    </StyledMessages>
  );
}

export default Messages;
