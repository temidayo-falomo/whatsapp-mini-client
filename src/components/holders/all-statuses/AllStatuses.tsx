import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { auth, db } from "../../../firebase/firebase-config";
import { AppContext } from "../../../helper/Context";
import { StyledAllStatuses } from "./AllStatuses.styled";
import { GrLinkPrevious } from "react-icons/gr";

function AllStatuses() {
  const {
    allStatus,
    setAllStatus,
    setDisplayStatus,
    statusByUser,
    setStatusByUser,
  } = useContext(AppContext);

  const handleStatusCard = () => {
    setDisplayStatus(true);
  };

  useEffect(() => {
    const postsCollectionRef = collection(db, "status-uploads");
    const q = query(postsCollectionRef, orderBy("timestamp"));
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
    <StyledAllStatuses>
      <div className="top-part row btw center">
        <h2>User Statuses</h2>
        <Link to="/">
          <GrLinkPrevious className="prev"/>
        </Link>
      </div>

      {allStatus?.map((data: any) => {
        return (
          <div
            className="status-card row center"
            key={data.id}
            onClick={handleStatusCard}
          >
            <svg viewBox="0 0 120 120">
              <circle cx="55" cy="55" r="55" className="dashed" />
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
              <h4>{data.userName}</h4>
              <span>Today at {data.realTime}</span>
            </div>
          </div>
        );
      })}
    </StyledAllStatuses>
  );
}

export default AllStatuses;
