import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../firebase/firebase-config";
import { AppContext } from "../../../helper/Context";
import { StyledAllStatuses } from "./AllStatuses.styled";
import { HiPencil } from "react-icons/hi";
import { MdArrowBack } from "react-icons/md";

function AllStatuses(props: any) {
  const {
    allStatus,
    setAllStatus,
    setDisplayStatus,
    setStatusByUser,
    setFilteredStatuses,
    theme,
  } = useContext(AppContext);
  const [number, setNumber] = useState<any>("disp");

  //Function to set card to active & determine what user's status is being shown.

  const handleStatusCard = (param: any, indexParam: number) => {
    setDisplayStatus(true);
    setFilteredStatuses(param);
    setNumber(indexParam);
  };

  //Get All Users` Status

  useEffect(() => {
    const postsCollectionRef = collection(db, "status-uploads");
    const q = query(postsCollectionRef, orderBy("timestamp", "asc"));
    onSnapshot(q, (snapshot) => {
      const posts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const arrayUniqueByKey = [
        ...new Map(posts.map((item: any) => [item["userId"], item])).values(),
      ];
      setAllStatus(arrayUniqueByKey);
      setStatusByUser(posts);
    });
  }, []);

  return (
    <StyledAllStatuses theme={theme}>
      <div className="top-part row center gap-1">
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MdArrowBack />
        </Link>
        <h2>User Statuses</h2>
      </div>

      {allStatus
        .sort((a: any, b: any) => a.timestamp - b.timestamp)
        .slice(0)
        .reverse()
        .map((data: any, index: any) => {
          return (
            <div
              className={`status-card row center ${
                index === number && "card-active"
              }`}
              key={data.id}
              onClick={() => handleStatusCard(data.userId, index)}
            >
              <svg viewBox="0 0 120 120">
                <circle cx="55" cy="55" r="55" className="" />
                <foreignObject x="5" y="5" height="100px" width="100px">
                  <div
                    className="txt"
                    style={{ backgroundColor: data.statusColor }}
                  >
                    {data.statusText.slice(0, 8)}..
                  </div>
                </foreignObject>
              </svg>
              <div className="col gap-5">
                <h4 style={{ textTransform: "capitalize" }}>{data.userName}</h4>
                <span>Today at {data.realTime}</span>
              </div>
            </div>
          );
        })}

      <HiPencil
        className="pointer plus-icon"
        onClick={() => props.setShowAdd(true)}
      />
    </StyledAllStatuses>
  );
}

export default AllStatuses;
