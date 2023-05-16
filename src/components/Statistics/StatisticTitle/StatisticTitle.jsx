import PropTypes from 'prop-types';
import css from './StatisticTitle.module.css';

export default function StatisticTitle({ title }) {
  return <h2 className="title">{title}</h2>;
}

StatisticTitle.propTypes = {
  title: PropTypes.string,
};
