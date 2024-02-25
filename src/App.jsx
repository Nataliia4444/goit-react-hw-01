import "./App.css";
//* Profile
import Profile from "./components/Profile/Profile";
import userData from "./components/Profile/ProfileData.json";

//* FriendList
import FriendList from "./components/FriendList/FriendList";
import friends from "./components/FriendList/FriendList.json";

//* TransactionHistory
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./components/TransactionHistory/TransactionHistory.json";

function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friend={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
