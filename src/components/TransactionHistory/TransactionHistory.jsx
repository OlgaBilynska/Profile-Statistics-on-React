import css from "./TransactionHistory.module.css";
import { Transaction } from "components/Transaction/Transaction";

export const TransactionHistory = ({ transactions }) => {
    return (
        <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

            <tbody>
                
    {transactions.map(({type, amount, currency}) => (
        <Transaction
                type={type}
                amount={amount}
                currency={currency}
        />
    ))}
    
  </tbody>
</table>
    )
}