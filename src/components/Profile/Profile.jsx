import css from "./Profile.module.css";
export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.cardProfile}>
      <div className={css.userData}>
        <div className={css.circleImage}>
          <img src={image} alt="User avatar" width={200} />
        </div>
        <p className={css.userName}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.activityList}>
        <li className={css.activityItem}>
          <span>Followers</span> <span>{followers}</span>
        </li>
        <li className={css.activityItem}>
          <span>Views</span> <span>{views}</span>
        </li>
        <li className={css.activityItem}>
          <span>Likes</span> <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
