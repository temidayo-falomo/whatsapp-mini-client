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
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../../../firebase/firebase-config";
import { Link } from "react-router-dom";
import DetailedUsers from "../detailed-users/DetailedUsers";
import UserCircle from "../../user-circle/UserCircle";

function DashboardLeft() {
  const {
    users,
    setUsers,
    setFriendId,
    setFriendImg,
    setFriendName,
    setDisplayDelete,
    setAllMessages,
    newMsg1,
    newMsg2,
    setNewMsg1,
    setNewMsg2,
  } = useContext(AppContext);

  const [friendsList, setFriendsList] = useState<any>();
  const [friendsCards, setFriendsCards] = useState<any>([]);
  const [number, setNumber] = useState("disp");
  const [dropdown, setDropdown] = useState(false);
  const [detailedUsersShow, setDetailedUsersShow] = useState(false);
  const [searchFriendsText, setSearchFriendsText] = useState("");

  // users collection
  const usersCollectionRef = collection(db, "users");

  const getAllUsers = async () => {
    const q = query(usersCollectionRef);
    onSnapshot(q, (snapshot) => {
      const usrs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usrs);
    });
  };

  const addFriendToUser = async (
    userId: any,
    friendAvatar: any,
    friendId: any,
    friendName: any
  ) => {
    const userDoc = doc(db, "users", userId);

    await getDoc(userDoc).then((doc: any) => {
      setFriendsList(doc.data().friends);

      const newFriend = {
        friends: [
          ...doc.data().friends,
          {
            friendName,
            friendAvatar,
            friendId,
          },
        ],
      };

      //Check If Friend to be added is current user.

      if (friendId !== auth.currentUser?.uid) {
        updateDoc(userDoc, newFriend);
      } else {
        console.log("You can't text yourself!");
      }
    });
  };

  const removeFriend = async (userId: any, friendId: any) => {
    const userDoc = doc(db, "users", userId);

    await getDoc(userDoc).then((doc: any) => {
      const removedFriend = {
        friends: [
          ...doc.data().friends?.filter((val: any) => {
            return val.friendId !== friendId;
          }),
        ],
      };

      updateDoc(userDoc, removedFriend);
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

    const id: any = auth.currentUser?.uid;
    const docRef = doc(db, "users", id);
    onSnapshot(docRef, (doc) => {
      setFriendsCards(doc.data()?.friends);
    });
  }, []);

  // messages collection
  const colRef = collection(db, "messages");

  useEffect(() => {
    // queries
    const q = query(colRef, where("senderId", "==", auth.currentUser?.uid));

    const q2 = query(colRef, where("receiverId", "==", auth.currentUser?.uid));

    // realtime collection's data
    onSnapshot(q, (snapshot) => {
      const posts1 = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setNewMsg1(posts1);
    });

    onSnapshot(q2, (snapshot) => {
      const posts2 = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setNewMsg2(posts2);
    });
  }, []);

  useEffect(() => {
    setAllMessages(
      [...newMsg1, ...newMsg2].sort(
        (a: any, b: any) => a.timestamp - b.timestamp
      )
    );
  }, []);

  return (
    <StyledDashboardLeft>
      <div
        className={
          !detailedUsersShow ? "detailed-users" : "detailed-users active"
        }
      >
        <DetailedUsers
          detailedUsersShow={detailedUsersShow}
          setDetailedUsersShow={setDetailedUsersShow}
          addFriendToUser={addFriendToUser}
          removeFriend={removeFriend}
        />
      </div>

      <div className="top btw row center">
        <div className="gap-1 row center gap">
          <div
            className="avatar"
            style={{
              backgroundImage: `url(${auth.currentUser?.photoURL})`,
              backgroundColor: "rebeccapurple",
            }}
          ></div>
          <Link to="/status-uploads">
            <MdDataUsage className="status pointer" />
          </Link>
        </div>

        <HiOutlineChevronDown
          className={dropdown ? "pointer round" : "pointer"}
          onClick={() => setDropdown(!dropdown)}
        />

        {dropdown && (
          <div className="dropdown col">
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
          </div>
        )}
      </div>

      <div className="users row gap-1">
        {users?.map((data: any) => {
          return (
            <UserCircle
              {...data}
              key={data.id}
              addFriendToUser={addFriendToUser}
              removeFriend={removeFriend}
            />
          );
        })}
      </div>

      <div className="search-row">
        <input
          type="search"
          placeholder="Search or start a new chat"
          onChange={(e) => setSearchFriendsText(e.target.value)}
        />
        <div className="search-dropdown"></div>
      </div>

      <div className="message-cards">
        {friendsCards
          ?.filter((data: any) => {
            if (searchFriendsText === "") {
              return data;
            } else if (
              data.friendName
                .toLowerCase()
                .includes(searchFriendsText.toLowerCase())
            ) {
              return data;
            }
          })
          .map((data: any, index: any) => {
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
                <MessageCard {...data} index={index} />
              </div>
            );
          })}
        {friendsCards?.length === 0 && (
          <p style={{ margin: "auto", lineHeight: "27px" }}>
            You haven't added any Friends yet.
            <br /> Click on a user profile to Quick Add.
          </p>
        )}
      </div>

      <div
        className="chat-circle grid-center pointer"
        onClick={() => setDetailedUsersShow(!detailedUsersShow)}
      >
        <BsChatRightTextFill className="pointer" />
      </div>
    </StyledDashboardLeft>
  );
}

export default DashboardLeft;
