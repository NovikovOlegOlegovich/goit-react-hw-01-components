import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import StatisticTitle from './StatisticTitle/StatisticTitle';
import StatisticList from './StatisticsList/StatisticList';

export default function Statistics({ title, data }) {
  return (
    <section className="statistics">
      <StatisticTitle title={title} />
      <StatisticList data={data} />
    </section>
  );
}
