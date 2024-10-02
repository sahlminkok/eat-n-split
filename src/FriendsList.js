import React from "react";
import Friend from "./Friend";

const FriendsList = ({ friends }) => {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            name={friend.name}
            image={friend.image}
            balance={friend.balance}
          />
        ))}
      </ul>
    </>
  );
};

export default FriendsList;
