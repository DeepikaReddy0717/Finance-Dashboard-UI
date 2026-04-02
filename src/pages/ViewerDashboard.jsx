import Navbar from "../components/common/Navbar";
import SummaryCard from "../components/cards/SummaryCard";
import TransactionList from "../components/transactions/TransactionList";
import Insights from "../components/insights/Insights";
import Charts from "../components/charts/Charts";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExportButtons from "../components/common/ExportButtons";
const ViewerDashboard = () => {
  const { transactions } = useContext(AppContext);

  return (
    <div className="relative min-h-screen 
    bg-gradient-to-br from-blue-50 via-white to-indigo-50
    dark:from-gray-900 dark:via-gray-900 dark:to-black transition">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 py-6 space-y-6 relative z-10">

        <Navbar />

        <div className="flex justify-between items-start flex-wrap gap-3">

  {/* LEFT */}
  <div className="flex flex-col gap-1">

    <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
      Viewer Dashboard
    </h2>

    <span className="w-fit text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full">
      👁️ View Only
    </span>

  </div>

  {/* RIGHT */}
  <ExportButtons />

</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <SummaryCard title="Balance" />
          <SummaryCard title="Income" />
          <SummaryCard title="Expenses" />
        </div>

        {transactions.length > 0 ? (
          <Charts />
        ) : (
          <div className="card text-center text-gray-400">
            No data available
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TransactionList />
          </div>
          <Insights />
        </div>

      </div>
    </div>
  );
};

export default ViewerDashboard;