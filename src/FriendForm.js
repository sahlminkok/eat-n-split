import React, { useState } from "react";
import Button from "./Button";

const FriendForm = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const friend = {
      name,
      image: `${image}?u=${id}`,
      id,
      balance: 0,
    };

    onAddFriend(friend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🖼️ Friend image</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.event)}
      />

      <Button onAction={handleSubmit}>Add</Button>
    </form>
  );
};

export default FriendForm;
