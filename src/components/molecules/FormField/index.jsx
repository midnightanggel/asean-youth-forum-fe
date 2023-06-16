import clsx from "clsx";
import { TextField } from "@/components";

export const FormField = (props) => {
  const inputWidth = clsx(
    `flex flex-row items-center justify-between border-2 border-[#D9D9D9] rounded-lg`,
    {
      "w-full ": props.width === "full",
      "w-auto ": props.width === "auto",
    }
  );
  const inputPadding = clsx(
    `text-[#A2A2A2] flex items-center text-2xl font-bold cursor-pointer`,
    {
      "p-1 ": props.padding === "1",
      "p-2 ": props.padding === "2",
      "p-3 ": props.padding === "3",
    }
  );

  const inputVariant = clsx(` `, {
    "cursor-not-allowed  bg-gray-200 ": props.variant === "disabled",
    "bg-white ": props.variant !== "disabled",
  });

  const classname = [inputWidth, inputVariant].join("");
  return (
    <div className={classname}>
      <TextField {...props} />
      <div className={inputPadding}>{props.children}</div>
    </div>
  );
};
