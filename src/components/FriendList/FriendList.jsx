import FriendItem from "../FriendItem/FriendItem";
import css from "./FriendList.module.css";
export default function FriendList(data) {
  return (
    <div className={css.cardList}>
      <ul className={css.cardsFriends}>
        {data.friend.map((item) => {
          return (
            <li key={item.id}>
              <FriendItem
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
