import React, { useContext, useEffect, useState } from "react";
import { StyledDashboardLeft } from "./DashboardLeft.styled";
import { MdDataUsage } from "react-icons/md";
import { HiOutlineChevronDown } from "react-icons/hi";
import { BsChatRightTextFill } from "react-icons/bs";
import MessageCard from "../../message-card/MessageCard";
import { AppContext } from "../../../helper/Context";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../../../firebase/firebase-config";
import { Link } from "react-router-dom";

function DashboardLeft() {
  const {
    users,
    setUsers,
    setFriendId,
    setFriendImg,
    setFriendName,
    setDisplayDelete,
  } = useContext(AppContext);

  const [friendsList, setFriendsList] = useState<any>();
  const [friendsCards, setFriendsCards] = useState<any>([]);
  const [number, setNumber] = useState("disp");

  const usersCollectionRef = collection(db, "users");

  const getAllUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const addFriendToUser = async (
    userId: any,
    friendAvatar: any,
    friendId: any,
    friendName: any
  ) => {
    const userDoc = doc(db, "users", userId);

    await getDoc(userDoc)
      .then((doc: any) => {
        setFriendsList(doc.data().friends);
      })
      .then(() => {
        if (friendsList) {
          const newFriend = {
            friends: [
              ...friendsList,
              {
                friendName,
                friendAvatar,
                friendId,
              },
            ],
          };
          updateDoc(userDoc, newFriend);
        }
      });
  };

  const handleCard = (
    paramId: any,
    paramImg: any,
    paramName: any,
    paramIndex: any
  ) => {
    setFriendId(paramId);
    setFriendImg(paramImg);
    setFriendName(paramName);
    setNumber(paramIndex);
    setDisplayDelete(false);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    const id: any = auth.currentUser?.uid;
    console.log(id);

    const docRef = doc(db, "users", id);
    onSnapshot(docRef, (doc) => {
      setFriendsCards(doc.data()?.friends);
    });
  }, []);

  return (
    <StyledDashboardLeft>
      <div className="top btw row center">
        <div className="gap-1 row center gap">
          <div
            className="avatar"
            style={{ backgroundImage: `url(${auth.currentUser?.photoURL})` }}
          ></div>
          <Link to="/status-uploads">
            <MdDataUsage className="status pointer" />
          </Link>
        </div>

        <HiOutlineChevronDown className="pointer" />
      </div>

      <div className="users row gap-1">
        {users?.map((data: any) => {
          return (
            <div
              key={data.id}
              className="user"
              style={{ backgroundImage: `url(${data.userAvatar})` }}
              onClick={() =>
                addFriendToUser(
                  auth.currentUser?.uid,
                  data.userAvatar,
                  data.id,
                  data.username
                )
              }
            ></div>
          );
        })}
      </div>

      <div className="search-row">
        <input type="search" placeholder="Search or start a new chat" />
        <div className="search-dropdown"></div>
      </div>

      <div className="message-cards">
        {friendsCards?.map((data: any, index: any) => {
          return (
            <div
              key={index}
              className={`normal-card ${index === number && "card-active"}`}
              onClick={() =>
                handleCard(
                  data.friendId,
                  data.friendAvatar,
                  data.friendName,
                  index
                )
              }
            >
              <MessageCard {...data} />
            </div>
          );
        })}
      </div>

      <div className="chat-circle grid-center pointer">
        <BsChatRightTextFill className="pointer" />
      </div>
    </StyledDashboardLeft>
  );
}

export default DashboardLeft;
