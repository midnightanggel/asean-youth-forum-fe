import clsx from "clsx";

export const TextField = (props) => {
  const { value, type, placeholder, padding, accept } = props;
  const buttonPadding = clsx(`focus:outline-none rounded-l-lg w-full `, {
    "p-1 ": padding === "1",
    "p-2 ": padding === "2",
    "p-3 ": padding === "3",
  });
  return (
    <input
      accept={accept}
      placeholder={placeholder}
      type={type}
      value={value}
      className={buttonPadding}
    />
  );
};
