import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { Transaction } from 'components/Transaction/Transaction';
import { TableTopCell, Table, TableTop, TableTopRow, TableBody } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableTop>
        <TableTopRow>
          <TableTopCell>Type</TableTopCell>
          <TableTopCell>Amount</TableTopCell>
          <TableTopCell>Currency</TableTopCell>
        </TableTopRow>
      </TableTop>

      <TableBody>
        {items.map(({ type, amount, currency, id }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      key: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
