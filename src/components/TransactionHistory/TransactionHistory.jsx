import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TransactionHistoryTbody,
  TransactionHistoryTR,
  TransactionHistoryTHead,
  TransactionHistoryTH,
  TransactionHistoryTD,
} from './TransactionHistory.styled';

export default function TransactionHistory({ transactions }) {
  return (
    <TransactionHistoryTable>
      <TransactionHistoryTHead>
        <TransactionHistoryTR>
          <TransactionHistoryTH>Type</TransactionHistoryTH>
          <TransactionHistoryTH>Amount</TransactionHistoryTH>
          <TransactionHistoryTH>Currency</TransactionHistoryTH>
        </TransactionHistoryTR>
      </TransactionHistoryTHead>

      <TransactionHistoryTbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TransactionHistoryTR key={id}>
              <TransactionHistoryTD>{type}</TransactionHistoryTD>
              <TransactionHistoryTD>{amount}</TransactionHistoryTD>
              <TransactionHistoryTD>{currency}</TransactionHistoryTD>
            </TransactionHistoryTR>
          );
        })}
      </TransactionHistoryTbody>
    </TransactionHistoryTable>
  );
}

TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
