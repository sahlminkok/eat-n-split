import React, { useState } from "react";
import FriendsList from "./FriendsList";
import FriendForm from "./FriendForm";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [open, setOpen] = useState(false);

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <div className="App">
      <div className="sidebar">
        <FriendsList friends={friends} />
        <FriendForm
          onAddFriend={handleAddFriend}
          open={open}
          handleOpen={handleOpen}
        />
        <Button onAction={handleOpen}>{open ? "close" : "Add friend"}</Button>
      </div>
      <div>
        <FormSplitBill />
      </div>
    </div>
  );
}

export default App;
