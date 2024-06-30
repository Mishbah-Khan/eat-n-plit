import Person from "./Person";

export default function Friends({ friends, onSelect, selectedFriend }) {
  const friend = friends;
  return (
    <ul>
      {friend.map((friend) => (
        <Person
          onSelect={onSelect}
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
