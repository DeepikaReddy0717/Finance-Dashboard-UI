import Navbar from "../components/common/Navbar";
import SummaryCard from "../components/cards/SummaryCard";
import TransactionList from "../components/transactions/TransactionList";
import Insights from "../components/insights/Insights";

const Dashboard = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Navbar />

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <SummaryCard title="Balance" />
        <SummaryCard title="Income" />
        <SummaryCard title="Expenses" />
      </div>

      <TransactionList />
      <Insights />
    </div>
  );
};

export default Dashboard;