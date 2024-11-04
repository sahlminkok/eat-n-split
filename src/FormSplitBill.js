import React, { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ onSplitBill, friend }) => {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [paying, setPaying] = useState("user");

  const friendExpense = bill - myExpense;

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !myExpense) return;

    let value;

    if (paying === "user") value = friendExpense;
    if (paying === "friend") value = -myExpense;

    onSplitBill(value);

    setBill("");
    setMyExpense("");
    setPaying("user");
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split bill with {friend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>🧍‍♂️ Your expense</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) => setMyExpense(e.target.value)}
      />

      <label>🧑‍🤝‍🧑 {friend.name}'s expense</label>
      <input type="text" disabled value={friendExpense} />

      <label>🤑 Who is paying the bill</label>
      <select value={paying} onChange={(e) => setPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button>Split</Button>
    </form>
  );
};

export default FormSplitBill;
