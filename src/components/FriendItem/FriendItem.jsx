import css from "../FriendList/FriendList.module.css";
export default function FriendItem({ avatar, name, isOnline }) {
  return (
    <div className={css.cardFriend}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={isOnline ? css.frendStatusOnline : css.frendStatusOffline}>
        {isOnline ? "Online" : "Ofline"}
      </p>
    </div>
  );
}
