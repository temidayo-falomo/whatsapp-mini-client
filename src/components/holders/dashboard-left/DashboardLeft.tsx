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
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../../../firebase/firebase-config";
import { Link } from "react-router-dom";
import DetailedUsers from "../detailed-users/DetailedUsers";
import UserCircle from "../../user-circle/UserCircle";
import { CgCornerRightDown } from "react-icons/cg";

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
    number,
    setNumber,
    theme,
  } = useContext(AppContext);

  const [friendsList, setFriendsList] = useState<any>();
  const [friendsCards, setFriendsCards] = useState<any>([]);
  const [dropdown, setDropdown] = useState(false);
  const [detailedUsersShow, setDetailedUsersShow] = useState(false);
  const [searchFriendsText, setSearchFriendsText] = useState("");

  // users collection
  const usersCollectionRef = collection(db, "users");

  //Get All User Circles

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

  // Add Friend by pushing friend details as an object into the users' array Field.
  // Pushing does'nt work in Firestore, so i had to get all previous array content and mutate it in FE.

  const addFriendToUser = async (
    userId: any,
    friendAvatar: any,
    friendId: any,
    friendName: any
  ) => {
    const userDoc = doc(db, "users", userId);
    var time = new Date();

    await getDoc(userDoc).then((doc: any) => {
      setFriendsList(doc.data().friends);

      const newFriend = {
        friends: [
          ...doc.data().friends,
          {
            friendName,
            friendAvatar,
            friendId,
            timestamp: time,
            active: false,
          },
        ],
      };

      //*Check If Friend to be added is current user.

      if (friendId !== auth.currentUser?.uid) {
        updateDoc(userDoc, newFriend);
      } else {
        console.log("You can't text yourself!");
      }
    });
  };

  // Remove Friend( Similar to Above)

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

  // Function To Handle What Card is Active/Get the current...
  //..user Messages by updating the correct Filtered Global States.

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

  //Run Some afformentioned Functions On Render

  useEffect(() => {
    getAllUsers();

    //* Didnt have the time to create a separate function for the Logic
    //* This is to get all current Friends Of Current User
    const id: any = auth.currentUser?.uid;
    const docRef = doc(db, "users", id);
    onSnapshot(docRef, (doc) => {
      setFriendsCards(doc.data()?.friends);
    });
  }, []);

  useEffect(() => {
    // messages collection
    const colRef = collection(db, "messages");

    // All Queries
    const q = query(colRef, where("senderId", "==", auth.currentUser?.uid));
    const q2 = query(colRef, where("receiverId", "==", auth.currentUser?.uid));

    // realtime collection's data
    // Both Snapshots are basically making respective queries for q1 & q2
    // Whilst also respectively updating respective states.

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
    //* Combining & Sorting All Messages On Render
    setAllMessages(
      [...newMsg1, ...newMsg2].sort(
        (a: any, b: any) => a.timestamp - b.timestamp
      )
    );
  }, []);

  //End Of Seperate Useeffects(I prefer writing multiple useEffects)

  return (
    <StyledDashboardLeft theme={theme}>
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

      <div className="col gap-1">
        <h3
          className="row center gap-5"
          style={{ fontSize: "1.5rem", paddingLeft: "1rem" }}
        >
          Quick Add
          <CgCornerRightDown
            style={{ color: "royalblue", fontWeight: "600" }}
          />
        </h3>
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
          ?.sort((a: any, b: any) => a.timestamp - b.timestamp)
          .filter((data: any) => {
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
          .slice(0)
          .reverse()
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
          <p style={{ margin: "auto", lineHeight: "26px" }}>
            You haven't added any Friends yet.
            <br /> Click on a user profile to Quick Add.
          </p>
        )}
      </div>

      <div
        className="chat-circle grid-center pointer"
        onClick={() => setDetailedUsersShow(!detailedUsersShow)}
      >
        <BsChatRightTextFill />
      </div>
    </StyledDashboardLeft>
  );
}

export default DashboardLeft;
