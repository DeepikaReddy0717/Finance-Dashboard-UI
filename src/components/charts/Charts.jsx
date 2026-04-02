import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const Charts = () => {
  const { transactions, theme } = useContext(AppContext);

  if (!transactions || transactions.length === 0) {
    return (
      <div className="card text-center text-gray-400">
        No chart data available
      </div>
    );
  }

  // 📈 Line Data
  let balance = 0;
  const lineData = transactions.map((t) => {
    balance += t.type === "income" ? t.amount : -t.amount;
    return {
      date: t.date,
      balance,
    };
  });

  // 🥧 Pie Data
  const categoryMap = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const pieData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  const COLORS = ["#3B82F6", "#EF4444", "#10B981", "#F59E0B"];

  // 🔥 FIX COLORS BASED ON THEME
  const textColor = theme === "dark" ? "#E5E7EB" : "#374151";
  const gridColor = theme === "dark" ? "#374151" : "#E5E7EB";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* 📈 Line Chart */}
      <div className="card hover:scale-[1.02] transition">
        <h2 className="title mb-4">Balance Trend</h2>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />

            <XAxis
              dataKey="date"
              tick={{ fill: textColor, fontSize: 12 }}
            />

            <YAxis
              tick={{ fill: textColor, fontSize: 12 }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "none",
              }}
            />

            <Line
              type="monotone"
              dataKey="balance"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ r: 3 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 🥧 Pie Chart */}
      <div className="card hover:scale-[1.02] transition">
        <h2 className="title mb-4">Spending Breakdown</h2>

        {pieData.length === 0 ? (
          <div className="text-center text-gray-400 py-10">
            No expense data
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={90}
                innerRadius={40}
                paddingAngle={4}
                label={{ fill: textColor }} // 🔥 FIX LABEL COLOR
              >
                {pieData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Charts;