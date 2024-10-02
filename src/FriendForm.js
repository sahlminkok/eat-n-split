import React, { useState } from "react";
import Button from "./Button";

const FriendForm = ({ onAddFriend, open, handleOpen }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=118836");

  function handleSubmit(e) {
    e.preventDefault();

    const friend = { name, image, id: Date.now(), balance: 0 };

    onAddFriend(friend);

    setName("");
    setImage("https://i.pravatar.cc/48?u=118836");
    handleOpen();
  }

  return (
    <>
      {open && (
        <form className="form-add-friend">
          <label>🧑‍🤝‍🧑 Friend name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>🖼️ Friend image</label>
          <select value={image} onChange={(e) => setImage(e.target.value)}>
            <option value="https://i.pravatar.cc/48?u=118836">Image 1</option>
            <option value="https://i.pravatar.cc/48?u=499476">Image 2</option>
            <option value="https://i.pravatar.cc/48?u=933372">Image 3</option>
          </select>

          <Button onAction={handleSubmit}>Add</Button>
        </form>
      )}
    </>
  );
};

export default FriendForm;
