import React, { useContext, useState, useRef } from "react";
import { StyledStatus } from "./Status.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppContext } from "../../../helper/Context";
import { MdOutlineCancel } from "react-icons/md";
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
import { formatDistanceToNow } from "date-fns";

function Status() {
  const { statusByUser, setDisplayStatus, filteredStatuses, setNumber } =
    useContext(AppContext);
  const sliderRef = useRef<Slider>(null);

  const [active, setActive] = useState<number>(0);
  const [replyText, setReplyText] = useState("");

  const handleIndex = (param: number) => {
    setActive(param);
    sliderRef.current?.slickGoTo(param);
  };

  // Slider settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current: number, next: number) => setActive(next),
  };

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
        <Slider ref={sliderRef} {...settings}>
          {statusByUser
            ?.filter((val: any) => {
              return val.userId === filteredStatuses;
            })
            ?.map((data: any, index: number) => {
              return (
                <div className="each-slide-effect relative" key={data.id}>
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
                          <span className="cap">{data.userName}</span>
                          <span className="time">
                            {formatDistanceToNow(
                              new Date(data.timestamp.seconds * 1000),
                              { addSuffix: true }
                            )}
                          </span>
                        </div>
                      </div>

                      <div className="indis">
                        <div className="indicators-w">
                          {statusByUser
                            ?.filter(
                              (val: any) => val.userId === filteredStatuses
                            )
                            ?.map((_: any, idx: number) => (
                              <div
                                key={idx}
                                className={`indicator tiny-rect ${
                                  idx === active ? "active" : ""
                                }`}
                                onClick={() => handleIndex(idx)}
                              />
                            ))}
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
        </Slider>
      </div>
    </StyledStatus>
  );
}

export default Status;
