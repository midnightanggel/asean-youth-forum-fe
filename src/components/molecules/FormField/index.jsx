import clsx from "clsx";
import { TextField } from "@/components";

export const FormField = (props) => {
  const { children, value, padding, width, placeholder, type } = props;

  const inputWidth = clsx(
    `flex flex-row bg-white items-center justify-between border-2 border-[#D9D9D9] rounded-lg`,
    {
      "w-full ": width === "full",
      "w-auto ": width === "auto",
    }
  );
  const inputPadding = clsx(
    `text-[#D9D9D9] flex items-center text-2xl font-normal`,
    {
      "p-1 ": padding === "1",
      "p-2 ": padding === "2",
      "p-3 ": padding === "3",
    }
  );

  return (
    <div className={inputWidth}>
      <TextField
        placeholder={placeholder}
        type={type}
        value={value}
        padding={padding}
      />
      <div className={inputPadding}>{children}</div>
    </div>
  );
};
