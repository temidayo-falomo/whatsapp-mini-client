import React, { useContext } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { auth } from "../../../firebase/firebase-config";
import { AppContext } from "../../../helper/Context";
import { StyledDetailedUsers } from "./DetailedUsers.styled";

function DetailedUsers(props: any) {
  const { user, users } = useContext(AppContext);

  return (
    <StyledDetailedUsers>
      <div className="det-top row btw center">
        <h4>Add Users</h4>

        <MdOutlineCancel
          onClick={() => props.setDetailedUsersShow(!props.detailedUsersShow)}
          className="pointer"
        />
      </div>

      <div className="det-col col">
        {users
          ?.slice(0)
          .reverse()
          .map((data: any) => {
            return (
              <div key={data.id} className="det-card row btw">
                <div className="row center gap-1">
                  <div
                    className="det-avt"
                    style={{ backgroundImage: `url(${data.userAvatar})` }}
                  ></div>
                  <div className="col gap-5">
                    <h3 className="cap">{data.username}</h3>
                    <span>
                      {data.userAbout ? data.userAbout : "Available."}
                    </span>
                  </div>
                </div>
                {auth.currentUser?.uid !== data.id && (
                  <div>
                    {!user?.friends.some((e: any) => data.id === e.friendId) ? (
                      <button
                        onClick={() =>
                          props.addFriendToUser(
                            auth.currentUser?.uid,
                            data.userAvatar,
                            data.id,
                            data.username
                          )
                        }
                      >
                        Add Friend
                      </button>
                    ) : (
                      <button>Remove</button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </StyledDetailedUsers>
  );
}

export default DetailedUsers;
