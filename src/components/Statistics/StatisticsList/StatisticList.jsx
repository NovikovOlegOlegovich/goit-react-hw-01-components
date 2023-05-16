import PropTypes from 'prop-types';
import css from './StatisticList.module.css';
import StatisticItem from '../StatisticItem/StatisticItem';

export default function StatisticList({ data }) {
  return (
    <ul className={css.statLlist}>
      {data.map(elem => (
        <StatisticItem key={elem.id} info={elem} />
      ))}
    </ul>
  );
}

StatisticList.propTypes = {
  data: PropTypes.object.isRequired,
};
