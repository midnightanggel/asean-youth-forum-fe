import clsx from "clsx";
export const AuthLayout = (props) => {
  const { children, direction } = props;

  const templateDirection = clsx(
    `w-full h-screen flex bg-[#F0F2F5] md:text-base text-sm `,
    {
      "flex-row": direction === "row",
      "flex-row-reverse": direction === "reverse",
    }
  );

  return <section className={templateDirection}>{children}</section>;
};
