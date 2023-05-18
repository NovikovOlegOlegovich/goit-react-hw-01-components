import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({ friends }) {
  const { isOnline, avatar, name } = friends;
  return (
    <li class={css.item}>
      <span
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
        class={css.status}
      ></span>
      <img class={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p class={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
