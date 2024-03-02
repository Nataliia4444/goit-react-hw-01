import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <div className={css.tableWrapper}>
      <table className={css.table}>
        <thead className={css.tableHeader}>
          <tr className={css.tr}>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, amount, type, currency }) => {
            return (
              <tr key={id} className={css.tr}>
                <td className={css.td}>{type}</td>
                <td className={css.td}>{amount}</td>
                <td className={css.td}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
