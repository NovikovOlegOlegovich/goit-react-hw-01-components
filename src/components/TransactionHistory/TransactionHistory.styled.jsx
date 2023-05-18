import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  border: 3px solid rgb(3, 3, 3);
  width: 60%;
  text-align: center;
  font-family: 'Helvetica Neue';
  color: #767676;
  letter-spacing: 1px;
  line-height: 2;
  margin-bottom: 50px;
  background-color: #56d7f0;
`;

export const TransactionHistoryTHead = styled.thead`
  background-color: #335e5f;
`;

export const TransactionHistoryTH = styled.th``;

export const TransactionHistoryTbody = styled.tbody``;

export const TransactionHistoryTR = styled.tr`
  :nth-of-type(odd) {
    background-color: #ffffff;
  }
  :nth-of-type(even) {
    background-color: #afdee2;
  }
`;

export const TransactionHistoryTD = styled.td``;
