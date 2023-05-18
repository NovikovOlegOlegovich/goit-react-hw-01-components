import PropTypes from 'prop-types';
import {
  FriendsListItem,
  FriendsListItemStatus,
  FriendsListItemAvatar,
  FriendsListItemName,
} from './FriendListItem.styled';

export default function FriendListItem({ friend }) {
  const { isOnline, avatar, name } = friend;
  return (
    <FriendsListItem>
      <FriendsListItemStatus
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></FriendsListItemStatus>
      <FriendsListItemAvatar src={avatar} alt="User avatar" width="48" />
      <FriendsListItemName>{name}</FriendsListItemName>
    </FriendsListItem>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
