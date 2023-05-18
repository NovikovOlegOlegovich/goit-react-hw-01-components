import PropTypes from 'prop-types';
import { FrendsList } from './FriendList.styled';
import FrendListItem from '../FriendListItem';

export default function FrendList({ friends }) {
  return (
    <FrendsList>
      {friends.map(friend => (
        <FrendListItem key={friend.id} friend={friend} />
      ))}
    </FrendsList>
  );
}

FrendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
