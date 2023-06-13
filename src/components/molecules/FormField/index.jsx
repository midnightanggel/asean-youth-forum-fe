import clsx from "clsx";
import { TextField } from "@/components";

export const FormField = (props) => {
  // const {
  //   children,
  //   value,
  //   padding,
  //   width,
  //   placeholder,
  //   type,
  //   accept,
  //   onChange,
  //   name,
  // } = props;

  const inputWidth = clsx(
    `flex flex-row bg-white items-center justify-between border-2 border-[#D9D9D9] rounded-lg`,
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

  return (
    <div className={inputWidth}>
      <TextField {...props} />
      <div className={inputPadding}>{props.children}</div>
    </div>
  );
};
