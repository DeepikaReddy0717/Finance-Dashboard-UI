import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Input from "../common/Input";
import Select from "../common/Select";

const TransactionList = () => {
  const {
    transactions,
    filter,
    setFilter,
    typeFilter,
    setTypeFilter,
    sortOrder,
    setSortOrder,
  } = useContext(AppContext);

  let filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(filter.toLowerCase())
  );

  if (typeFilter !== "all") {
    filtered = filtered.filter((t) => t.type === typeFilter);
  }

  if (sortOrder === "low") {
    filtered.sort((a, b) => a.amount - b.amount);
  } else if (sortOrder === "high") {
    filtered.sort((a, b) => b.amount - a.amount);
  }

  return (
    <div className="card">
      <h2 className="title mb-4">Transactions</h2>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <Input
          placeholder="Search category..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <Select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          options={[
            { label: "All", value: "all" },
            { label: "Income", value: "income" },
            { label: "Expense", value: "expense" },
          ]}
        />

        <Select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          options={[
            { label: "Sort", value: "" },
            { label: "Low → High", value: "low" },
            { label: "High → Low", value: "high" },
          ]}
        />
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="text-center py-10 text-gray-400 dark:text-gray-500">
          No transactions found
        </div>
      ) : (
        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="flex justify-between items-center p-3 rounded-xl 
              bg-gray-50 dark:bg-gray-700 
              hover:bg-gray-100 dark:hover:bg-gray-600 
              transition"
            >
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-100">
                  {t.category}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-400">
                  {t.date}
                </p>
              </div>

              <div
                className={`font-semibold ${
                  t.type === "income"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                ₹{t.amount}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionList;