const Input = ({ placeholder, value, onChange, type = "text" }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-gray-200 bg-gray-50 text-gray-800 
      dark:bg-gray-700 dark:text-white 
      px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
    />
  );
};

export default Input;