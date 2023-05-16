import css from './StatisticItem.module.css';
import PropTypes from 'prop-types';

export default function StatisticItem({ info }) {
  const { label, percentage } = info;
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
