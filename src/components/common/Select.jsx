const Select = ({ value, onChange, options }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="border border-gray-200 bg-gray-50 text-gray-800 
      dark:bg-gray-700 dark:text-white 
      px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      {options.map((opt, i) => (
        <option key={i} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;