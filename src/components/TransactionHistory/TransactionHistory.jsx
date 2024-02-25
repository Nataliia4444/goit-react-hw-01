import css from "../TransactionHistory/TransactionHistory.module.css";

export default function TransactionHistory(items) {
  return (
    <div className={css.tableWrapper}>
      <table className={css.table}>
        <thead className={css.tableHeader}>
          <tr>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.items.map((item) => {
            return (
              <tr key={item.id}>
                <td className={css.td}>{item.type}</td>
                <td className={css.td}>{item.amount}</td>
                <td className={css.td}>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
