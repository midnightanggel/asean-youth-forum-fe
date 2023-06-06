import clsx from "clsx";
import { Loading } from "../Loading";
// import { Link } from "react-router-dom";
export const Button = ({ loading = false, ...props }) => {
  const fontWeight = clsx(``, {
    "font-thin ": props.weight === "thin",
    "font-extralight ": props.weight === "extralight",
    "font-light ": props.weight === "light",
    "font-normal ": props.weight === "normal",
    "font-medium ": props.weight === "medium",
    "font-bold ": props.weight === "bold",
  });

  const fontSize = clsx(``, {
    "text-sm ": props.font === "sm",
    "text-base ": props.font === "base",
    "text-lg ": props.font === "lg",
  });

  const buttonWidth = clsx(``, {
    "w-full ": props.width === "full",
    "w-[100px] ": props.width === "100",
    "w-[200px] ": props.width === "200",
    "w-[300px] ": props.width === "300",
    "p-1 ": props.padding === "1",
    "p-2 ": props.padding === "2",
    "p-3 ": props.padding === "3",
  });

  const padding = clsx(``, {
    "p-1 ": props.padding === "1",
    "p-2 ": props.padding === "2",
    "p-3 ": props.padding === "3",
  });

  const buttonVariant = clsx(
    "rounded-lg font-medium disabled:bg-gray-400 disabled:text-gray-50 disabled:border-gray-400 appearance-none hover:opacity-75 ",
    {
      "bg-[#1DBC40] text-white ": props.variant === "primary",
      "text-[#1DBC40] border-2 border-[#1DBC40] ":
        props.variant === "primary-outline",
    }
  );
  const className = [buttonVariant, buttonWidth, fontSize, fontWeight].join("");
  return (
    <button {...props} className={className}>
      {loading ? <Loading /> : props.children}
    </button>
  );
};
