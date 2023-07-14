import PropTypes from 'prop-types';
import { StatEl } from 'components/StatElement/StatEl';
import { Section, Title, List } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  console.log('stats', stats);

  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, percentage, label }) => (
          <StatEl key={id} label={label} percentage={percentage} />
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
