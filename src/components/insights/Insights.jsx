import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Insights = () => {
  const { transactions } = useContext(AppContext);

  if (!transactions || transactions.length === 0) {
    return (
      <div className="card text-center text-gray-400 dark:text-gray-500">
        No insights available
      </div>
    );
  }

  const categoryMap = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const highestCategory = Object.keys(categoryMap).reduce((a, b) =>
    categoryMap[a] > categoryMap[b] ? a : b
  );

  const currentMonth = new Date().getMonth();
  const lastMonth = currentMonth - 1;

  let currentTotal = 0;
  let lastTotal = 0;

  transactions.forEach((t) => {
    const month = new Date(t.date).getMonth();
    if (month === currentMonth) currentTotal += t.amount;
    if (month === lastMonth) lastTotal += t.amount;
  });

  const difference = currentTotal - lastTotal;

  let insightText = "";
  if (difference > 0) insightText = "Spending increased 📈";
  else if (difference < 0) insightText = "You reduced spending 🎉";
  else insightText = "Spending is consistent ⚖️";

  return (
    <div className="card h-full">
      <h2 className="title mb-4">Insights</h2>

      <div className="space-y-4">

        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Highest Spending Category
          </p>
          <h3 className="text-lg font-bold text-red-500">
            {highestCategory}
          </h3>
        </div>

        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Monthly Comparison
          </p>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            ₹{difference > 0 ? "+" : ""}
            {difference}
          </h3>
        </div>

        <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Observation
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {insightText}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Insights;