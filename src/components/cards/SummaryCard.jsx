import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const SummaryCard = ({ title }) => {
  const { transactions } = useContext(AppContext);

  const total = transactions.reduce((acc, t) => {
    if (title === "Income" && t.type === "income") return acc + t.amount;
    if (title === "Expenses" && t.type === "expense") return acc + t.amount;
    if (title === "Balance") {
      return t.type === "income" ? acc + t.amount : acc - t.amount;
    }
    return acc;
  }, 0);

  return (
    <div className="card flex justify-between items-center hover:scale-[1.02] transition">

      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        <h2 className="text-2xl font-bold mt-1 text-gray-800 dark:text-white">
          ₹{total}
        </h2>
      </div>

      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold ${
          title === "Income"
            ? "bg-green-500"
            : title === "Expenses"
            ? "bg-red-500"
            : "bg-blue-500"
        }`}
      >
        ₹
      </div>
    </div>
  );
};

export default SummaryCard;