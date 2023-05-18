import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FrendListItem from '../FriendListItem';

export default function FrendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FrendListItem key={friends.id} friends={friend} />
      ))}
    </ul>
  );
}

FrendList.propTypes = {
  friends: PropTypes.object.isRequired,
};
