import css from './StatisticItem.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export default function StatisticItem({ info }) {
  const { label, percentage } = info;
  let color = getRandomHexColor();
  return (
    <li
      style={{
        backgroundColor: { color },
      }}
      className={css.item}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
