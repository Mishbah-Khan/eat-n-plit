import { useState } from "react";
import { Button } from "./Button";

export default function CalculationBox({ selectedFriend, billSplit }) {
  const [bill, setBill] = useState("");
  const [userPay, setUserPay] = useState("");
  const friendPay = bill - userPay;
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function splitBillHandler(e) {
    e.preventDefault();
    if (!bill || !userPay) return;
    billSplit(whoIsPaying === "user" ? friendPay : -userPay);
  }

  return (
    <form className="form-split-bill" onSubmit={splitBillHandler}>
      <h2>Split the bill {selectedFriend.name}</h2>
      <label>💰Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>💲Your expense</label>
      <input
        type="text"
        value={userPay}
        onChange={(e) =>
          setUserPay(
            Number(e.target.value) > bill ? userPay : Number(e.target.value)
          )
        }
      />
      <label>🙎‍♂️{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={friendPay} />

      <label>🤑Who is paying the bill ?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
        name=""
        id=""
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
