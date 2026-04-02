import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Button from "../common/Button";
import Input from "../common/Input";
import Select from "../common/Select";

const AddTransaction = () => {
  const { transactions, setTransactions } = useContext(AppContext);

  const [form, setForm] = useState({
    category: "",
    amount: "",
    type: "expense",
  });

  const handleAdd = () => {
    if (!form.category || !form.amount) return;

    const newTransaction = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      category: form.category,
      amount: Number(form.amount),
      type: form.type,
    };

    setTransactions([newTransaction, ...transactions]);

    setForm({ category: "", amount: "", type: "expense" });
  };

  return (
    <div className="card mt-6">
      <h2 className="title mb-4">Add Transaction</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
        
        <Input
          placeholder="Category"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <Input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
        />

        <Select
          value={form.type}
          onChange={(e) =>
            setForm({ ...form, type: e.target.value })
          }
          options={[
            { label: "Expense", value: "expense" },
            { label: "Income", value: "income" },
          ]}
        />

        <Button onClick={handleAdd}>+ Add</Button>
      </div>
    </div>
  );
};

export default AddTransaction;