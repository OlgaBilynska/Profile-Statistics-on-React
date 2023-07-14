import css from './StatEl.module.css';
import { StatItem, StatLabel, StatPercentage } from './StatEl.styled';

export const StatEl = ({label, percentage }) => {
    return (
        <StatItem>
            <StatLabel>{label}</StatLabel>
            <StatPercentage>{percentage}</StatPercentage>
        </StatItem>
    )
}