import styled from '@emotion/styled';

export const FriendsListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background-color: aliceblue;
  width: 550px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const FriendsListItemStatus = styled.span`
  margin-right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
`;

export const FriendsListItemAvatar = styled.img`
  width: 120px;
  border: 2px solid rgb(161, 161, 161);
  background-color: rgb(181, 188, 193);
  border-radius: 5px;
  margin-right: 40px;
`;

export const FriendsListItemName = styled.p``;
