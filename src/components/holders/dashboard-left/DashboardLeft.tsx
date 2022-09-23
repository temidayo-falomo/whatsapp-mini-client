import React, { useContext, useEffect, useState } from "react";
import { StyledDashboardLeft } from "./DashboardLeft.styled";
import { MdDataUsage } from "react-icons/md";
import { HiOutlineChevronDown } from "react-icons/hi";
import { BsChatRightTextFill } from "react-icons/bs";
import MessageCard from "../../message-card/MessageCard";
import { AppContext } from "../../../helper/Context";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";

const arr = [1, 2, 3, 4];

function DashboardLeft() {
  const { users, setUsers } = useContext(AppContext);

  const usersCollectionRef = collection(db, "users");

  const getAllUsers = () => {
    const getRecommendations = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getRecommendations();
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <StyledDashboardLeft>
      <div className="top btw row center">
        <div className="gap-1 row center gap">
          <div className="avatar"></div>
          <MdDataUsage className="status pointer" />
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
            ></div>
          );
        })}
      </div>

      <div className="search-row">
        <input type="search" placeholder="Search or start a new chat" />
        <div className="search-dropdown"></div>
      </div>

      <div className="message-cards">
        {arr.map((data: any, index) => {
          return <MessageCard key={index} {...data} />;
        })}
      </div>

      <div className="chat-circle grid-center pointer">
        <BsChatRightTextFill />
      </div>
    </StyledDashboardLeft>
  );
}

export default DashboardLeft;
