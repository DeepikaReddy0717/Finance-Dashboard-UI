import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const ExportButtons = () => {
  const { transactions } = useContext(AppContext);

  const exportJSON = () => {
    const blob = new Blob(
      [JSON.stringify(transactions, null, 2)],
      { type: "application/json" }
    );
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "transactions.json";
    link.click();
  };

  const exportCSV = () => {
    if (!transactions.length) return;

    const headers = ["Date", "Category", "Type", "Amount"];
    const rows = transactions.map((t) =>
      [t.date, t.category, t.type, t.amount].join(",")
    );

    const csv = [headers.join(","), ...rows].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "transactions.csv";
    link.click();
  };

  return (
    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-1 shadow-sm">

      <button
        onClick={exportCSV}
        className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg 
        bg-green-500 text-white hover:bg-green-600 transition"
      >
        📥 CSV
      </button>

      <button
        onClick={exportJSON}
        className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg 
        bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        📄 JSON
      </button>

    </div>
  );
};

export default ExportButtons;