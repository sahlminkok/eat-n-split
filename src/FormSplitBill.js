import React, { useState } from "react";

const FormSplitBill = () => {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");

  const friendExpense = bill - myExpense;

  return (
    <form className="form-split-bill">
      <h2>Split bill with X</h2>

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

      <label>🧑‍🤝‍🧑 X's expense</label>
      <input type="text" disabled value={friendExpense} />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
    </form>
  );
};

export default FormSplitBill;
