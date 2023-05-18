import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import getRandomHexColor from '../../helpers/getRandomHexColor';

export default function Statistics({ title, data }) {

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {data.map(elem => (
          
          <li
            style={{
              backgroundColor: `${getRandomHexColor()}`,
            }}
            className={css.item}
          >
            <span className={css.label}>{elem.label}</span>
            <span className={css.percentage}>{elem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  title: PropTypes.string,
};
