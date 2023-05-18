import PropTypes from 'prop-types';
import getRandomHexColor from '../../helpers/getRandomHexColor';

import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsItemLabel,
  StatisticsItemPercentage,
} from './Statistics.styled';

export default function Statistics({ title, data }) {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatisticsList>
        {data.map(elem => (
          <StatisticsItem
            key={elem.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <StatisticsItemLabel>{elem.label}</StatisticsItemLabel>
            <StatisticsItemPercentage>
              {elem.percentage}%
            </StatisticsItemPercentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
