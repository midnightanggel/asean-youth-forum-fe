import clsx from "clsx";
import { Loading } from "../Loading";
// import { Link } from "react-router-dom";
export const Button = ({ loading = false, ...props }) => {
  const buttonSize = clsx(`h-auto`, {
    "text-sm ": props.size === "sm",
    "text-base ": props.size === "md",
    "text-lg ": props.size === "lg",
    "w-full ": props.width === "full",
    "w-[100px] ": props.width === "100",
    "w-[200px] ": props.width === "200",
    "w-[300px] ": props.width === "300",
    "p-1 ": props.padding === "1",
    "p-2 ": props.padding === "2",
    "p-3 ": props.padding === "3",
  });

  const buttonVariant = clsx(
    "rounded-lg font-medium disabled:bg-gray-400 disabled:text-gray-50 disabled:border-gray-400 appearance-none hover:opacity-75 ",
    {
      "bg-[#1DBC40] text-white ": props.variant === "primary",
      "bg-white text-[#1DBC40] border-2 border-[#1DBC40] ":
        props.variant === "primary-outline",
    }
  );
  const className = [buttonVariant, buttonSize].join("");
  return (
    <button {...props} className={className}>
      {loading ? <Loading /> : props.children}
    </button>
  );
};
