import clsx from "clsx";
import { Loading } from "../Loading";
// import { Link } from "react-router-dom";
export const Button = ({ loading = false, width = `w-full`, ...props }) => {
  const buttonSize = clsx(`${width} h-auto hover:opacity-75 p-2`, {
    "text-sm": props.size === "sm",
    "text-base": props.size === "md",
    "text-lg": props.size === "lg",
  });

  const buttonVariant = clsx(
    "rounded-lg font-medium disabled:bg-gray-400 disabled:text-gray-50 disabled:border-gray-400 appearance-none ",
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
