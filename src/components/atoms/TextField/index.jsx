import clsx from "clsx";

export const TextField = (props) => {
  const { value, type, placeholder, padding } = props;
  const buttonPadding = clsx(`focus:outline-none rounded-l-lg `, {
    "p-1 ": padding === "1",
    "p-2 ": padding === "2",
    "p-3 ": padding === "3",
  });
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      className={buttonPadding}
    />
  );
};
