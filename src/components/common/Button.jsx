const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 active:scale-95"
    >
      {children}
    </button>
  );
};

export default Button;