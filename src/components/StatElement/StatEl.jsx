import css from './StatEl.module.css';

export const StatEl = ({ stats }) => {
    return (
        <li className={css.item}>
            <span className={css.label}>{stats.label}</span>
            <span className={css.percentage}>{stats.percentage}</span>
        </li>
    )
}