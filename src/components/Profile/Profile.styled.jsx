import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  padding-top: 20px;
  width: 500px;
  background-color: rgb(251, 251, 251);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  box-sizing: border-box;
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const ProfileDescription = styled.div``;

export const ProfileAvatar = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  width: 200px;
  background-color: yellow;
`;

export const ProfileName = styled.p`
  text-align: center;
  color: rgb(1, 1, 1);
  font-weight: 700;
  margin-bottom: 20px;
`;

export const ProfileTag = styled.p`
  text-align: center;
  font-size: 34px;
  margin: 0px 0px 20px 0px;
  color: rgb(99, 105, 105);
  font-weight: 500;
`;

export const ProfileLocation = styled.p`
  font-size: 34px;
  text-align: center;
  color: rgb(99, 105, 105);
  margin: 0px 0px 70px 0px;
  font-weight: 500;
`;

export const ProfileStatsList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

export const ProfileStatsItem = styled.li`
  width: calc((100%-3px) / 3);
  display: flex;
  flex-direction: column;
  border-top: 3px solid rgb(197, 197, 197);
  font-size: 24px;
  align-items: center;
  padding: 20px;
  background-color: rgb(222, 225, 225);
  :nth-of-type(-n + 2) {
    border-right: 3px solid rgb(197, 197, 197);
  }
`;

export const ProfileStatsLabel = styled.span`
  font-size: 28px;
  color: rgb(99, 105, 105);
  font-weight: 500;
`;

export const ProfileStatsQuantity = styled.span`
  font-size: 32px;
  color: rgb(43, 44, 44);
  font-weight: 500;
`;
