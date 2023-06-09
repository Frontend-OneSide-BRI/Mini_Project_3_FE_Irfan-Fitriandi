const Button = ({ classname, label, ...props }) => {
  return (
    <button
      className={`bg-grn hover:bg-grnh px-4 py-[6px] rounded-[0.2rem] cursor-pointer text-white active:scale-110 duration-300 ${classname}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
