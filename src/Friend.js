import React from "react";
import Button from "./Button";

const Friend = ({ name, image, balance }) => {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className={balance > 0 ? "green" : balance < 0 ? "red" : ""}>
        {balance === 0
          ? `You and ${name} are even`
          : balance < 0
          ? `You owe ${name} $${Math.abs(balance)}`
          : `${name} owes you $${balance}`}
      </p>

      <Button>Select</Button>
    </li>
  );
};

export default Friend;
