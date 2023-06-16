import clsx from "clsx";

export const TextField = (props) => {
  const {
    value,
    type,
    placeholder,
    padding,
    accept,
    onChange,
    name,
    onKeyDown,
    variant,
  } = props;
  const buttonPadding = clsx(`focus:outline-none rounded-l-lg w-full `, {
    "p-1 ": padding === "1",
    "p-2 ": padding === "2",
    "p-3 ": padding === "3",
  });
  const variantInput = clsx(``, {
    "cursor-not-allowed ": variant === "disabled",
  });

  const className = [buttonPadding, variantInput].join("");

  return (
    <input
      name={name}
      onChange={onChange}
      onKeyDown={onKeyDown}
      accept={accept}
      placeholder={placeholder}
      type={type}
      value={value}
      className={className}
      disabled={variant === "disabled" && true}
    />
  );
};
