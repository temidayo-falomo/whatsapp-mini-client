import React, { useContext, useState } from "react";
import { auth } from "../../firebase/firebase-config";
import { AppContext } from "../../helper/Context";

function UserCircle(props: any) {
  const { user } = useContext(AppContext);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="user"
      style={{ backgroundImage: `url(${props.userAvatar})` }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isHovering && (
        <div>
          {!user?.friends.some((e: any) => props.id === e.friendId) ? (
            <button
              onClick={() =>
                props.addFriendToUser(
                  auth.currentUser?.uid,
                  props.userAvatar,
                  props.id,
                  props.username
                )
              }
            >
              Add
            </button>
          ) : (
            <button
              onClick={() =>
                props.removeFriend(auth.currentUser?.uid, props.id)
              }
            >
              Remove
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default UserCircle;
