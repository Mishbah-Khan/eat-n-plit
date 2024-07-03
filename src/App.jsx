import { useState } from "react";
import CalculationBox from "./CalculationBox";
import AddFriend from "./AddFriend";
import Friends from "./Friends";
import { Button } from "./Button";

//Demo object
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
  const [addForm, setAddForm] = useState(false);

  //this state default value should be blank like: useState([])
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleBillSplit(value) {
    console.log(value);

    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  function AddFormHandler() {
    setAddForm((add) => !add);
  }

  function selectHandler(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setAddForm(false);
  }

  function addFriendHandler(friend) {
    setFriends((friends) => [...friends, friend]);
    setAddForm(false);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <Friends
          friends={friends}
          onSelect={selectHandler}
          selectedFriend={selectedFriend}
        />

        {addForm && <AddFriend onAddFriend={addFriendHandler} />}

        <Button onClick={AddFormHandler}>
          {addForm ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <CalculationBox
          selectedFriend={selectedFriend}
          billSplit={handleBillSplit}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

export default App;
