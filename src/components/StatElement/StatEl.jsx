import PropTypes from 'prop-types';
import { StatItem, StatLabel, StatPercentage } from './StatEl.styled';

export const StatEl = ({ label, percentage }) => {
  return (
    <StatItem>
      <StatLabel>{label}</StatLabel>
      <StatPercentage>{percentage}</StatPercentage>
    </StatItem>
  );
};

StatEl.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
