const Input = ({ ...props }) => {
  return (
    <input
      type="text"
      className="rounded-[0.2rem] outline-none text-blk py-1 px-3"
      {...props}
    />
  );
};

export default Input;
